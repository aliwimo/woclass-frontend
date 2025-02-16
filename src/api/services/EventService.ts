import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';
import type { AxiosResponse } from 'axios';
import type { EventType } from '@/types/models/event';
import type { ReserveRequest } from '@/types/api/event';

export const eventService = {
  async getAllEvents(): Promise<EventType[]> {
    const response = await axios.request<any, AxiosResponse<EventType[]>>({
      method: endpoints.events.list.method,
      url: endpoints.events.list.url()
    });
    return response.data;
  },

  async reserve(data: ReserveRequest) {
    return await axios.request({
      method: endpoints.events.create.method,
      url: endpoints.events.create.url(),
      data: data,
    });
  }
};
