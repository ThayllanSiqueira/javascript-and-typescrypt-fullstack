import { GetStaticProps } from 'next';
import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    'sort=id:desc&pagination[page]=0&pagination[pageSize]=3',
  );
  return {
    props: { posts },
    revalidate: 3,
  };
};
