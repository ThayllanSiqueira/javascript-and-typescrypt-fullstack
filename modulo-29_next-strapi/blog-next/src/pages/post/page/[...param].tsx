import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { useRouter } from 'next/router';
import { PaginationData } from '@/domain/posts/pagination';
import { countAllPosts } from '@/data/posts/count-all-posts';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!posts.length) {
    return <div>Página não encontrada....</div>;
  }

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context?.params && context.params.param) {
    const page = Number(context.params.param[0]);
    const category = context.params.param[1] || '';
    const postsPerPage = 3;
    // const startFrom = (page - 1) * postsPerPage;
    const nextPage = page + 1;
    const previousPage = page - 1;
    const categoryQuery = category
      ? `filters[category][name][$containsi]=${category}`
      : '';
    const urlQuery = `sort=id:desc&pagination[page]=${page}&pagination[pageSize]=${postsPerPage}&${categoryQuery}`;
    console.log(urlQuery);
    const posts = await getAllPosts(urlQuery);
    const metaPosts = await countAllPosts(categoryQuery);
    const numberOfPosts = Number(metaPosts.pagination.total);
    const pagination: PaginationData = {
      nextPage,
      previousPage,
      numberOfPosts,
      postsPerPage,
      category,
    };
    return {
      props: { posts, pagination, category },
      revalidate: 3,
    };
  }
  return {
    props: { error: true },
  };
};
