<script setup lang="ts">
import { defineProps } from 'vue';
import { Card } from 'primevue';
import type { SessionStatus } from '@/types/models/session';
import TimeRangeDisplay from '@/components/pages/classroom/TimeRangeDisplay.vue';
import CreateEventModal from '@/components/pages/event/CreateEventModal.vue';

defineProps<{
  classroomId: number
  date: Date,
  startTime: string,
  endTime: string,
  status: SessionStatus,
}>();

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
