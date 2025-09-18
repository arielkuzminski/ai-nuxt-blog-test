<template>
  <article class="card-base p-4 hover:shadow transition">
    <NuxtLink :to="`/post/${post.id}`" class="block">
      <h3 class="text-xl font-semibold">{{ post.title }}</h3>
      <p class="mt-1 text-sm text-muted">{{ new Date(post.publishedAt).toLocaleDateString() }}</p>
      <p class="mt-2 text-app/90">{{ post.excerpt }}</p>
    </NuxtLink>
  </article>
  
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog';
defineProps<{ post: BlogPost }>();
</script>


