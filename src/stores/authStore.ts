import { defineStore } from 'pinia';
import { ref } from 'vue';
import { authService } from '@/api/services/AuthService.ts';
import type { LoginRequest, RegisterRequest } from '@/types/api/auth';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string | null>(localStorage.getItem('token') || null);
  const isAuthenticated = ref<boolean>(false);

  const register = async (data: RegisterRequest) => {
    try {
      const response = await authService.register(data);
      token.value = response.token;
      isAuthenticated.value = true;
      localStorage.setItem('token', response.token);
    } catch (error) {
      throw error;
    }
  };

  const login = async (data: LoginRequest) => {
    try {
      const response = await authService.login(data);
      token.value = response.token;
      isAuthenticated.value = true;
      localStorage.setItem('token', response.token);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    token.value = null;
    isAuthenticated.value = false;
    localStorage.removeItem('token');
  };

  return {
    token,
    isAuthenticated,
    register,
    login,
    logout,
  };
});
