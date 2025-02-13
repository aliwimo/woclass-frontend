import axios from '@/api/axios.ts'
import endpoints from '@/api/endpoints'
import type { AxiosResponse } from 'axios'
import type { ClassroomType } from '@/types/models/classroom'

export const classroomService = {
  async getClassrooms (): Promise<ClassroomType[]> {
    const response = await axios.request<any, AxiosResponse<ClassroomType[]>>({
      method: endpoints.classrooms.list.method,
      url: endpoints.classrooms.list.url()
    });
    return response.data;
  }
}
