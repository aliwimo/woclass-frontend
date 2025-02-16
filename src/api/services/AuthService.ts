import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';
import type { authResponse, LoginRequest, RegisterRequest } from '@/types/api/auth';
import type { AxiosResponse } from 'axios';

export const authService = {
  async register(data: RegisterRequest): Promise<authResponse> {
    const response = await axios.request<any, AxiosResponse<authResponse>>({
      method: endpoints.auth.register.method,
      url: endpoints.auth.register.url(),
      data: data,
    });
    return response.data;
  },

  async login(data: LoginRequest): Promise<authResponse> {
    const response = await axios.request<any, AxiosResponse<authResponse>>({
      method: endpoints.auth.login.method,
      url: endpoints.auth.login.url(),
      data: data,
    });
    return response.data;
  },
};
