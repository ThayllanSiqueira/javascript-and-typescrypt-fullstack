import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchDataJson } from '@/utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}&${query}`;
  const posts = await fetchDataJson<PostData[]>(url);

  // Retorna um array vazio se `posts` for indefinido ou null
  if (!posts || !Array.isArray(posts)) {
    return [];
  }

  return posts;
};
