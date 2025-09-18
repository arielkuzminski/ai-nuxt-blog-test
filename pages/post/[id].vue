<template>
  <div class="mx-auto max-w-3xl px-4 py-8">
    <NuxtLink to="/" class="text-sm text-gray-600 hover:text-black">← Wróć</NuxtLink>
    <h1 class="mt-4 text-3xl font-bold">{{ post?.title }}</h1>
    <p class="mt-1 text-sm text-gray-500">{{ date }}</p>
    <p class="mt-4 text-gray-700">{{ post?.excerpt }}</p>
    <BlogPostRender v-if="post" class="mt-6" :widgets="post.widgets" />
  </div>
  
</template>

<script setup lang="ts">
import BlogPostRender from '~/components/BlogPostRender.vue';
import type { BlogPost } from '~/types/blog';

const route = useRoute();
const { data: post } = await useFetch<BlogPost>(`/api/posts/${route.params.id}`);

const date = computed(() => post.value ? new Date(post.value.publishedAt).toLocaleDateString() : '');
</script>


