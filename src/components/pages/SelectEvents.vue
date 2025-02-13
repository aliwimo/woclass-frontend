<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { eventService } from '@/api/services/event.service.ts'
import type { EventType } from '@/types/models/event'
import { Card, Skeleton } from 'primevue';

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
        class="flex flex-col justify-center gap-4"
      >
        <Card
          v-for="event in events"
          :key="event.id"
        >
          <template #title>{{ event.title }}</template>
          <template #content>
            <p class="m-0">
              {{ event.description }}
            </p>
            <span>
              {{
                new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                }).format(new Date(event.date))
              }}
            </span>
          </template>
        </Card>
      </div>

      <div v-else class="text-gray-500 dark:text-gray-400">No events found.</div>

    </div>


  </div>
</template>
