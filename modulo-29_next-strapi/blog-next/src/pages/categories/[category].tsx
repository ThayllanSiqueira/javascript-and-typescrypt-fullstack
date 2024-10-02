import { GetServerSideProps } from 'next';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import HomePage from '@/containers/HomePage';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const urlQuery = `sort=id:desc&pagination[page]=1&pagination[pageSize]=30&filters[category][name][$containsi]=${ctx.query.category}`;
  const posts = await getAllPosts(urlQuery);
  return {
    props: { posts, category: ctx.query.category },
  };
};
