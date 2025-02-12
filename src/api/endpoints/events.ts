const EventsEndpoints = {
  list: {
    method: 'GET',
    url: () => 'v1/events',
  },
} as const;

type EventsEndpoints = typeof EventsEndpoints;

export type { EventsEndpoints };
export default EventsEndpoints;
