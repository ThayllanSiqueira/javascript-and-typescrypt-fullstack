import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchDataJson } from '@/utils/fetch-json';
import { markdownToHtml } from '@/utils/markdown-to-html';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}&filters[slug][$containsi]=${slugString}`;
  const posts = await fetchDataJson<PostData[]>(url);

  if (!posts || posts.length === 0) {
    // Retorna um array vazio se não houver posts para evitar erro de undefined
    return [];
  }

  // Certifique-se de que o primeiro post tenha conteúdo antes de processar
  const content = posts[0].content
    ? await markdownToHtml(posts[0].content)
    : '';
  const finalContent = { ...posts[0], content };

  return [finalContent];
};
