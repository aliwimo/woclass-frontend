const ClassroomsEndpoints = {
  list: {
    method: 'GET',
    url: () => 'v1/classrooms',
  },
} as const;

type ClassroomsEndpoints = typeof ClassroomsEndpoints;

export type { ClassroomsEndpoints };
export default ClassroomsEndpoints;
