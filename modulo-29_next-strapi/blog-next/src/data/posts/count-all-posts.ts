import { POSTS_URL } from '@/config/app-config';
import { PostMeta } from '@/domain/posts/post';
import { fetchMetaJson } from '@/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<PostMeta> => {
  const url = `${POSTS_URL}&${query}`;
  const metaPosts = await fetchMetaJson<PostMeta>(url);
  console.log('metaPosts', metaPosts);
  return metaPosts;
};
