<script setup lang="ts">
import { defineProps } from 'vue';
import EventField from '@/components/ui/EventField.vue';

const props = defineProps<{
  date: string
  start: string
  end: string
}>();

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(new Date(date));
};

const formatTime = (time: string) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date(time));
};
</script>

<template>
  <div class="flex flex-row items-center">
    <EventField :value="formatDate(date)" icon-name="pi pi-calendar" />
    <span>: {{ formatTime(props.start) }} - {{ formatTime(props.end) }}</span>
  </div>
</template>

<style scoped></style>
