import EventsEndpoints from '@/api/endpoints/events.ts'
import ClassroomsEndpoints from '@/api/endpoints/classrooms.ts'

const EndpointManager = {
  events: EventsEndpoints,
  classrooms: ClassroomsEndpoints,
};

export default EndpointManager;
