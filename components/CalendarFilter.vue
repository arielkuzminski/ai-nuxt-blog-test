<template>
  <div class="flex items-center gap-2">
    <input
      type="date"
      v-model="date"
      class="input-base"
      @change="$emit('change', date || undefined)"
    />
    <button
      v-if="date"
      class="text-sm text-muted hover:text-app"
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


