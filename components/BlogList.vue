<template>
  <div>
    <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <BlogPostCard v-for="p in items" :key="p.id" :post="p" />
    </div>
    <div ref="sentinel" class="h-10"></div>
    <div v-if="loading" class="py-6 text-center text-muted">Ładowanie...</div>
    <div v-else-if="!hasMore && items.length === 0" class="py-6 text-center text-muted">Brak wyników</div>
  </div>
  
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog';
import BlogPostCard from './BlogPostCard.vue';

const props = defineProps<{ items: BlogPost[]; loading: boolean; hasMore: boolean }>();
const emit = defineEmits<{ (e: 'loadMore'): void }>();

const sentinel = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && props.hasMore && !props.loading) {
        emit('loadMore');
      }
    }
  });
  if (sentinel.value) observer.observe(sentinel.value);
});
</script>


