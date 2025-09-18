<template>
  <div class="relative">
    <input
      v-model="model"
      type="text"
      placeholder="Szukaj wpisów..."
      class="input-base pr-9"
      @input="$emit('change', model)"
    />
    <span class="absolute right-2 top-1/2 -translate-y-1/2 text-muted">🔎</span>
  </div>
  
</template>

<script setup lang="ts">
const model = defineModel<string>({ default: '' });
defineEmits<{ (e: 'change', value: string): void }>();
</script>


