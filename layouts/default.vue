<template>
  <div class="min-h-screen flex flex-col">
    <header class="border-b bg-white/70 backdrop-blur sticky top-0 z-40">
      <div class="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
        <NuxtLink to="/" class="font-semibold text-lg">Nuxt Blog</NuxtLink>
        <nav class="flex items-center gap-4 text-sm">
          <NuxtLink to="/admin" class="text-gray-600 hover:text-black">Admin</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t py-6 text-center text-sm text-gray-500">© {{ new Date().getFullYear() }} Nuxt Blog</footer>
  </div>
  
</template>

<script setup lang="ts"></script>


