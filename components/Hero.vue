<template>
  <section class="relative w-full h-60 md:h-80 lg:h-96 overflow-hidden">
    <img
      :src="src"
      :alt="alt"
      class="absolute inset-0 h-full w-full object-cover"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>
    <div class="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
      <div class="max-w-3xl">
        <h1 class="text-3xl md:text-5xl font-bold drop-shadow">{{ title }}</h1>
        <p v-if="subtitle" class="mt-3 text-white/90 drop-shadow">{{ subtitle }}</p>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
defineProps<{ src: string; alt?: string; title: string; subtitle?: string }>();
</script>


