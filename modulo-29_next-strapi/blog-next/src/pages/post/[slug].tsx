import { useRouter } from 'next/router';
import Error from 'next/error';
import { Post } from '@/containers/Post';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { getPost } from '@/data/posts/get-post';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const metaPosts = await countAllPosts();
  const numberOfPOsts = metaPosts.pagination.total;
  const posts = await getAllPosts(`pagination[limit]=${numberOfPOsts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (ctx?.params && ctx?.params.slug) {
    const posts = await getPost(ctx.params.slug);
    if (!posts || posts.length === 0 || !posts[0]) {
      return {
        notFound: true,
      };
    }

    return {
      props: { post: posts[0] },
      revalidate: 5,
    };
  }

  return {
    props: { error: true },
    revalidate: 5,
  };
};
