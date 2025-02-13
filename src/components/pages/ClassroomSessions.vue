<script setup lang="ts">
import { defineProps, onMounted, ref, watch } from 'vue'
import { Card, Button } from 'primevue'
import type { SessionType } from '@/types/models/session'
import { classroomService } from '@/api/services/classroom.service.ts'

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
    const formattedDate = props.date.toISOString().split('T')[0]
    sessions.value = await classroomService.getSessions(props.classroomId, formattedDate);
  } catch (error) {
    console.error('Error fetching classrooms:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchSessions)
watch(() => props.date, fetchSessions, { immediate: true });

</script>

<template>
  <div class="flex flex-col gap-4">
    <Card
      v-for="(session, index) in sessions"
      :key="index"
    >
      <template #title>{{ session.start_time }} - {{ session.end_time }}</template>
      <template #content>
        <span class="m-0">{{ session.status }}</span>
      </template>
      <template #footer>
        <Button label="reserve" />
      </template>
    </Card>
  </div>
</template>
