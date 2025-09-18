<template>
  <div class="flex items-center gap-2">
    <input
      type="date"
      v-model="date"
      class="rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
      @change="$emit('change', date || undefined)"
    />
    <button
      v-if="date"
      class="text-sm text-gray-600 hover:text-black"
      @click="clear"
    >Wyczyść</button>
  </div>
  
</template>

<script setup lang="ts">
const date = ref<string>('');
const emit = defineEmits<{ (e: 'change', value?: string): void }>();

function clear() {
  date.value = '';
  emit('change', undefined);
}
</script>


