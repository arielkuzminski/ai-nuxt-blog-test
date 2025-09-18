<template>
  <div class="prose max-w-none">
    <component
      v-for="w in widgets"
      :key="w.id"
      :is="w.type === 'text' ? 'div' : 'img'"
      v-bind="toProps(w)"
      class="my-4"
    />
  </div>
  
</template>

<script setup lang="ts">
import type { PostWidget, TextWidget, ImageWidget } from '~/types/blog';

const props = defineProps<{ widgets: PostWidget[] }>();

function toProps(widget: PostWidget) {
  if (widget.type === 'text') {
    return { innerHTML: (widget as TextWidget).html };
  }
  const img = widget as ImageWidget;
  return { src: img.url, alt: img.alt || '' };
}
</script>


