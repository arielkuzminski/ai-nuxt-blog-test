<template>
  <div>
    <Hero src="https://picsum.photos/seed/hero/1600/600" alt="Hero" title="Mój Blog" subtitle="Wpisy, nowości, projekty" />

    <div class="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div class="flex-1">
          <SearchInput v-model="search" @change="onSearch" />
        </div>
        <CalendarFilter @change="onDate" />
      </div>

      <BlogList :items="items" :loading="loading" :hasMore="hasMore" @loadMore="fetchNext()" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import Hero from '~/components/Hero.vue';
import SearchInput from '~/components/SearchInput.vue';
import CalendarFilter from '~/components/CalendarFilter.vue';
import BlogList from '~/components/BlogList.vue';
import { usePosts } from '~/composables/usePosts';

const { items, hasMore, loading, fetchNext, setSearch, setDate } = usePosts();

const search = ref('');

function onSearch(val: string) {
  setSearch(val);
  fetchNext(true);
}
function onDate(val?: string) {
  setDate(val);
  fetchNext(true);
}

onMounted(() => {
  fetchNext(true);
});
</script>


