<template>
  <div class="mx-auto max-w-5xl px-4 py-8">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-semibold">Panel admina</h1>
      <div class="flex items-center gap-2">
        <NuxtLink to="/admin/new" class="rounded-md bg-black px-4 py-2 text-white">Nowy wpis</NuxtLink>
        <button class="rounded-md border px-3 py-2" @click="logout">Wyloguj</button>
      </div>
    </div>

    <div class="mt-6 grid gap-4">
      <div v-for="p in posts" :key="p.id" class="flex items-center justify-between rounded-lg border p-4">
        <div>
          <p class="font-medium">{{ p.title }}</p>
          <p class="text-sm text-gray-500">{{ new Date(p.publishedAt).toLocaleDateString() }}</p>
        </div>
        <div class="flex items-center gap-2">
          <NuxtLink :to="`/admin/edit/${p.id}`" class="rounded-md border px-3 py-1">Edytuj</NuxtLink>
          <button class="rounded-md border px-3 py-1 text-red-600" @click="remove(p.id)">Usuń</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import type { BlogPost } from '~/types/blog';

const auth = useAuthStore();
const posts = ref<BlogPost[]>([]);

onMounted(async () => {
  const { data } = await useFetch<{ items: BlogPost[]; total: number }>(`/api/posts`, { query: { pageSize: 1000 } });
  posts.value = data.value?.items || [];
});

function logout() {
  auth.logout();
  navigateTo('/');
}

async function remove(id: string) {
  await $fetch(`/api/posts/${id}`, { method: 'DELETE' });
  posts.value = posts.value.filter((p) => p.id !== id);
}
</script>


