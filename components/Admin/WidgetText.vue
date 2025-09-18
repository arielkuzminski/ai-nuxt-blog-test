<template>
  <div>
    <client-only>
      <QuillEditor theme="snow" v-model:content="html" contentType="html" />
    </client-only>
  </div>
  
</template>

<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const html = defineModel<string>('html', { default: '' });
</script>


