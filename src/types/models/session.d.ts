export type SessionStatus = 'available' | 'reserved'

export type SessionType = {
  start_time: string
  end_time: string
  status: SessionStatus
}
