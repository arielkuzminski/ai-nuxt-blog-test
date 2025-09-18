import { deletePost } from '~/server/utils/db';

export default defineEventHandler((event) => {
  const id = event.context.params?.id as string;
  const ok = deletePost(id);
  if (!ok) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' });
  }
  return { ok: true };
});


