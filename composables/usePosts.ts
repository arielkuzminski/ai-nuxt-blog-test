import type { BlogPost } from '~/types/blog';

export interface UsePostsParams {
  q?: string;
  date?: string; // YYYY-MM-DD
  page?: number;
  pageSize?: number;
}

export function usePosts() {
  const items = ref<BlogPost[]>([]);
  const hasMore = ref(true);
  const total = ref(0);
  const loading = ref(false);
  const q = ref('');
  const date = ref<string | undefined>(undefined);
  const page = ref(1);
  const pageSize = ref(10);

  async function fetchNext(reset = false) {
    if (loading.value) return;
    loading.value = true;

    if (reset) {
      page.value = 1;
      items.value = [];
      hasMore.value = true;
    }

    if (!hasMore.value) {
      loading.value = false;
      return;
    }

    const { data } = await useFetch<{ items: BlogPost[]; hasMore: boolean; total: number }>(
      '/api/posts',
      {
        query: {
          q: q.value || undefined,
          date: date.value || undefined,
          page: page.value,
          pageSize: pageSize.value,
        },
      },
    );

    if (data.value) {
      items.value.push(...data.value.items);
      hasMore.value = data.value.hasMore;
      total.value = data.value.total;
      page.value += 1;
    }
    loading.value = false;
  }

  function setSearch(value: string) {
    q.value = value;
  }

  function setDate(value?: string) {
    date.value = value;
  }

  return { items, hasMore, total, loading, q, date, page, pageSize, fetchNext, setSearch, setDate };
}


