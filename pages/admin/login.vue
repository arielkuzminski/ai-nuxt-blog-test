<template>
  <div class="mx-auto max-w-sm px-4 py-12">
    <h1 class="text-2xl font-semibold">Logowanie</h1>
    <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
      <input v-model="password" type="password" placeholder="Hasło" class="input-base" />
      <button class="w-full btn-primary">Zaloguj</button>
      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
      <p class="text-xs text-muted">Hasło tymczasowe: admin1234</p>
    </form>
  </div>
  
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
const auth = useAuthStore();
const password = ref('');
const error = ref('');

function onSubmit() {
  if (auth.login(password.value)) {
    navigateTo('/admin');
  } else {
    error.value = 'Nieprawidłowe hasło';
  }
}
</script>


