import EventsEndpoints from '@/api/endpoints/event.endpoints.ts'
import ClassroomsEndpoints from '@/api/endpoints/classroom.endpoints.ts'

const EndpointManager = {
  events: EventsEndpoints,
  classrooms: ClassroomsEndpoints,
};

export default EndpointManager;
