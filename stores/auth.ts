import { defineStore } from 'pinia';

interface AuthState {
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({ isAuthenticated: false }),
  actions: {
    login(password: string) {
      if (password === 'admin1234') {
        this.isAuthenticated = true;
        return true;
      }
      return false;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});


