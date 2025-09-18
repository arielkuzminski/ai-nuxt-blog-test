<template>
  <div class="relative">
    <input
      v-model="model"
      type="text"
      placeholder="Szukaj wpisów..."
      class="w-full rounded-md border px-3 py-2 pr-9 focus:outline-none focus:ring-2 focus:ring-black/20"
      @input="$emit('change', model)"
    />
    <span class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">🔎</span>
  </div>
  
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: '' });
defineEmits<{ (e: 'change', value: string): void }>();
</script>


