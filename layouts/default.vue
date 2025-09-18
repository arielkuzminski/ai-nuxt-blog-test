<template>
  <div class="min-h-screen flex flex-col bg-app text-app">
    <header class="border-b border-base bg-card/95 backdrop-blur sticky top-0 z-50 shadow">
      <div class="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NuxtLink to="/" class="font-semibold text-lg hover:opacity-90">Nuxt Blog</NuxtLink>
        <nav class="flex items-center gap-2 text-sm">
          <NuxtLink to="/" class="nav-link" exact-active-class="nav-link-active" exact>Strona główna</NuxtLink>
          <NuxtLink to="/admin" class="nav-link" active-class="nav-link-active">Admin</NuxtLink>
        </nav>
      </div>
    </header>
    <main class="flex-1">
      <slot />
    </main>
    <footer class="border-t border-base py-6 text-center text-sm text-muted">© {{ new Date().getFullYear() }} Nuxt Blog</footer>
  </div>
  
</template>

<script setup lang="ts"></script>


