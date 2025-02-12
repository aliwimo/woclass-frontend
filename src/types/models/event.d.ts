export type EventType = {
  id: number;
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  description: string;
  status: 'scheduled' | 'cancelled' | 'completed';
}
