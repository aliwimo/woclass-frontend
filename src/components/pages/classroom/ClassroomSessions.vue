<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { Card, Button } from 'primevue'
import type { SessionType } from '@/types/models/session'
import { classroomService } from '@/api/services/classroom.service.ts'
import SessionCard from '@/components/pages/SessionCard.vue'
import { formatDate } from '@/utilities/formatDate.ts'

const props = defineProps({
  classroomId: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
});

const sessions = ref<SessionType[]>([])
const loading = ref<boolean>(false)

const fetchSessions = async () => {
  try {
    loading.value = true
    const formattedDate = formatDate(props.date);
    sessions.value = await classroomService.getSessions(props.classroomId, formattedDate);
  } catch (error) {
    console.error('Error fetching classrooms:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchSessions)
watch(() => props.date, fetchSessions);

</script>

<template>
  <div class="flex flex-col gap-4">
    <div>{{ props.date }}</div>
    <SessionCard
      v-for="(session, index) in sessions"
      :key="index"
      :status="session.status"
      :end-time="session.end_time"
      :start-time="session.start_time"
      :date="date"
      :classroom-id="classroomId"
    />
  </div>
</template>
