<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { Card, Button } from 'primevue'
import type { SessionStatus, SessionType } from '@/types/models/session'
import { classroomService } from '@/api/services/classroom.service.ts'
import { eventService } from '@/api/services/EventService.ts'
import { formatDate } from '@/utilities/formatDate.ts'
import type { ClassroomType } from '@/types/models/classroom'
import TimeRangeDisplay from '@/components/pages/classroom/TimeRangeDisplay.vue'
import CreateEventModal from '@/components/pages/classroom/CreateEventModal.vue'


const props = defineProps<{
  classroomId: number
  date: Date,
  startTime: string,
  endTime: string,
  status: SessionStatus,
}>()

const reserve = async () => {
  try {
    await eventService.reserve({
      user_id: 1,
      classroom_id: props.classroomId,
      date: formatDate(props.date),
      start_time: props.startTime,
      end_time: props.endTime,
      title: "Lecture",
      description: "Introduction to Laravel"
    });
  } catch (error) {
    console.error('Error reserving event: ', error)
  }
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card>
      <template #title>
        <TimeRangeDisplay :start-time="startTime" :end-time="endTime" />
      </template>
      <template #footer>
        <div class="flex">
          <CreateEventModal
            :status="status"
            :end-time="endTime"
            :start-time="startTime"
            :date="date"
            :classroom-id="classroomId"
          />
        </div>

      </template>
    </Card>
  </div>
</template>
