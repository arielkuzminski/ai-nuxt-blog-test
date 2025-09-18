import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/admin')) {
    const auth = useAuthStore();
    if (!auth.isAuthenticated && to.path !== '/admin/login') {
      return navigateTo('/admin/login');
    }
  }
});


