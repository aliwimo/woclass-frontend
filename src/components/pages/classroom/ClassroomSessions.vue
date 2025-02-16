<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import type { SessionType } from '@/types/models/session'
import { classroomService } from '@/api/services/classroom.service.ts'
import SessionCard from '@/components/pages/classroom/SessionCard.vue'
import { formatDate } from '@/utilities/formatDate.ts'
import NoSessions from '@/components/pages/classroom/NoSessions.vue'

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
  <div v-if="sessions.length > 0">
  <div class="grid grid-cols-3 gap-4">
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
  </div>
  <div v-else>
    <NoSessions v-show="date" />
  </div>
</template>
