import EventsEndpoints from '@/api/endpoints/EventEndpoints.ts'
import ClassroomsEndpoints from '@/api/endpoints/ClassroomEndpoints.ts'
import AuthEndpoints from '@/api/endpoints/AuthEndpoints.ts'

const EndpointManager = {
  auth: AuthEndpoints,
  classrooms: ClassroomsEndpoints,
  events: EventsEndpoints,
};

export default EndpointManager;
