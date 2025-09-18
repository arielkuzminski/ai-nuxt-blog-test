<template>
  <div class="space-y-2">
    <input v-model="url" type="url" placeholder="Image URL" class="w-full rounded-md border px-3 py-2" />
    <input v-model="alt" type="text" placeholder="Alt" class="w-full rounded-md border px-3 py-2" />
    <img v-if="url" :src="url" :alt="alt" class="max-h-48 rounded border" />
  </div>
  
</template>

<script setup lang="ts">
const url = defineModel<string>('url', { default: '' });
const alt = defineModel<string>('alt', { default: '' });
</script>


