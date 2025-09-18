import { getPost } from '~/server/utils/db';

export default defineEventHandler((event) => {
  const id = event.context.params?.id as string;
  const post = getPost(id);
  if (!post) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' });
  }
  return post;
});


