import axios from '@/api/axios.ts';
import endpoints from '@/api/endpoints';
import type { AxiosResponse } from 'axios';
import type { ClassroomType } from '@/types/models/classroom';
import type { SessionType } from '@/types/models/session';

export const classroomService = {
  async getClassrooms(): Promise<ClassroomType[]> {
    const response = await axios.request<any, AxiosResponse<ClassroomType[]>>({
      method: endpoints.classrooms.list.method,
      url: endpoints.classrooms.list.url(),
    });
    return response.data;
  },

  async getSessions(classroomId: number, date: string): Promise<SessionType[]> {
    const response = await axios.request<any, AxiosResponse<SessionType[]>>({
      method: endpoints.classrooms.sessions.method,
      url: endpoints.classrooms.sessions.url(classroomId),
      params: { date },
    });
    return response.data;
  },
};
