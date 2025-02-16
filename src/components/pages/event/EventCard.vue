<script setup lang="ts">
import { defineProps } from 'vue';
import { Card } from 'primevue';
import type { EventType } from '@/types/models/event';
import EventTimeRange from '@/components/pages/event/EventDate.vue';
import EventField from '@/components/ui/EventField.vue';

defineProps<{ event: EventType }>();

// Utility function to format date and time
</script>

<template>
  <Card class="bg-white shadow-lg rounded-lg overflow-hidden">
    <template #title>
      <div class="flex flex-col">
        <span class="text-xs">Title:</span>
        <span class="text-2xl font-bold text-teal-600">{{ event.title }}</span>
      </div>
    </template>

    <template #content>
      <div class="flex flex-col gap-1 text-sm">
        <EventTimeRange :date="event.date" :start="event.start_time" :end="event.end_time" />
        <div class="flex flex-row justify-between gap-1 text-sm">
          <EventField :value="event.classroom!.name" icon-name="pi pi-map-marker" />
          <EventField :value="event.user!.name" icon-name="pi pi-user" />
        </div>
      </div>
    </template>
  </Card>
</template>
