<template>
  <section class="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden">
    <img
      :src="src"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
      <div>
        <h1 class="text-3xl md:text-5xl font-bold">{{ title }}</h1>
        <p v-if="subtitle" class="mt-3 text-white/90">{{ subtitle }}</p>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
defineProps<{ src: string; alt?: string; title: string; subtitle?: string }>();
</script>


