const ClassroomsEndpoints = {
  list: {
    method: 'GET',
    url: () => 'v1/classrooms',
  },
  sessions: {
    method: 'GET',
    url: (classroomId: number) => `v1/classrooms/${classroomId}/sessions`,
  },
} as const;

type ClassroomsEndpoints = typeof ClassroomsEndpoints;

export type { ClassroomsEndpoints };
export default ClassroomsEndpoints;
