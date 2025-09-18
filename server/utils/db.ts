import type { BlogPost } from '~/types/blog';
import seed from '~/server/mock/blogPosts.json';

let posts: BlogPost[] = JSON.parse(JSON.stringify(seed));

export function listPosts() {
  return posts;
}

export function getPost(id: string) {
  return posts.find((p) => p.id === id) || null;
}

export function createPost(post: BlogPost) {
  posts.unshift(post);
  return post;
}

export function updatePost(id: string, patch: Partial<BlogPost>) {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return null;
  posts[index] = { ...posts[index], ...patch } as BlogPost;
  return posts[index];
}

export function deletePost(id: string) {
  const index = posts.findIndex((p) => p.id === id);
  if (index === -1) return false;
  posts.splice(index, 1);
  return true;
}


