<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { eventService } from '@/api/services/EventService.ts'
import type { EventType } from '@/types/models/event'
import { Card, Skeleton } from 'primevue';
import EventCard from '@/components/pages/event/EventCard.vue'

const events = ref<EventType[]>([])
const loading = ref<boolean>(false)

onMounted(async () => {
  try {
    loading.value = true
    events.value = await eventService.getAllEvents()
  } catch (error) {
    console.error('Error fetching events:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div
    class="w-full flex flex-col justify-center gap-4"
  >
    <Skeleton v-if="loading" class="w-full !h-20 mb-2"></Skeleton>

    <div v-else>
      <div
        v-if="events.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 justify-center gap-4"
      >
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>

      <div v-else class="text-gray-500 dark:text-gray-400">No events found.</div>

    </div>


  </div>
</template>
