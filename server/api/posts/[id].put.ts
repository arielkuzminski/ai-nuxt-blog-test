import { updatePost } from '~/server/utils/db';

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id as string;
  const patch = await readBody(event);
  const updated = updatePost(id, patch);
  if (!updated) {
    throw createError({ statusCode: 404, statusMessage: 'Not found' });
  }
  return updated;
});


