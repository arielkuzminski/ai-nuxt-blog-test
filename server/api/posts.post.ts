import { createPost } from '~/server/utils/db';
import type { BlogPost } from '~/types/blog';

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as Partial<BlogPost>;
  if (!body.title || !body.publishedAt) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' });
  }
  const nowId = String(Date.now());
  const post: BlogPost = {
    id: nowId,
    title: body.title!,
    excerpt: body.excerpt || '',
    publishedAt: body.publishedAt!,
    widgets: body.widgets || [],
  };
  return createPost(post);
});


