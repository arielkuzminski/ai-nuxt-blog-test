import posts from '~/server/mock/blogPosts.json';
import type { BlogPost } from '~/types/blog';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const search = (query.q as string)?.toLowerCase() ?? '';
  const date = (query.date as string) ?? '';
  const page = Number(query.page ?? 1);
  const pageSize = Number(query.pageSize ?? 10);

  let filtered = (posts as unknown as BlogPost[]).filter((p: BlogPost) => {
    const matchesSearch = !search || p.title.toLowerCase().includes(search) || p.excerpt.toLowerCase().includes(search);
    const matchesDate = !date || p.publishedAt.startsWith(date);
    return matchesSearch && matchesDate;
  });

  filtered = filtered.sort((a: BlogPost, b: BlogPost) => b.publishedAt.localeCompare(a.publishedAt));

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = filtered.slice(start, end);
  const hasMore = end < filtered.length;

  return { items, hasMore, total: filtered.length };
});


