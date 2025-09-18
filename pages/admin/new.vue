<template>
  <div class="mx-auto max-w-3xl px-4 py-8">
    <h1 class="text-2xl font-semibold">Nowy wpis</h1>
    <form class="mt-6 space-y-4" @submit.prevent="save">
      <input v-model="title" type="text" placeholder="Tytuł" class="w-full rounded-md border px-3 py-2" />
      <input v-model="publishedAt" type="date" class="w-full rounded-md border px-3 py-2" />
      <textarea v-model="excerpt" placeholder="Krótki opis" class="w-full rounded-md border px-3 py-2"></textarea>

      <div class="rounded-lg border p-4">
        <h2 class="font-medium">Treść</h2>
        <draggable v-model="widgets" item-key="id" class="mt-3 space-y-3" handle=".handle">
          <template #item="{ element, index }">
            <div class="rounded-md border p-3 bg-white">
              <div class="flex items-center justify-between mb-2">
                <p class="text-sm text-gray-600">Widget: {{ element.type }}</p>
                <div class="flex items-center gap-2">
                  <span class="handle cursor-move">⠿</span>
                  <button type="button" class="text-red-600" @click="removeWidget(index)">Usuń</button>
                </div>
              </div>
              <WidgetText v-if="element.type === 'text'" v-model:html="element.html" />
              <WidgetImage v-else v-model:url="element.url" v-model:alt="element.alt" />
            </div>
          </template>
        </draggable>
        <div class="mt-3 flex gap-2">
          <button type="button" class="rounded-md border px-3 py-1" @click="addText">Dodaj tekst</button>
          <button type="button" class="rounded-md border px-3 py-1" @click="addImage">Dodaj obrazek</button>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button class="rounded-md bg-black px-4 py-2 text-white">Zapisz</button>
        <NuxtLink to="/admin" class="rounded-md border px-4 py-2">Anuluj</NuxtLink>
      </div>
    </form>
  </div>
  
</template>

<script setup lang="ts">
import draggable from 'vuedraggable';
import WidgetText from '~/components/Admin/WidgetText.vue';
import WidgetImage from '~/components/Admin/WidgetImage.vue';
import type { PostWidget } from '~/types/blog';

const title = ref('');
const publishedAt = ref<string>('');
const excerpt = ref('');
const widgets = ref<PostWidget[]>([]);

function addText() {
  widgets.value.push({ id: String(Date.now() + Math.random()), type: 'text', html: '' } as any);
}
function addImage() {
  widgets.value.push({ id: String(Date.now() + Math.random()), type: 'image', url: '', alt: '' } as any);
}
function removeWidget(index: number) {
  widgets.value.splice(index, 1);
}

async function save() {
  const post = await $fetch('/api/posts', {
    method: 'POST',
    body: { title: title.value, publishedAt: publishedAt.value, excerpt: excerpt.value, widgets: widgets.value },
  });
  navigateTo('/admin');
}
</script>


