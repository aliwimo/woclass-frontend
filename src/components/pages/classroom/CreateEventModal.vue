<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { ref, defineProps } from 'vue';
import { Button, InputText } from 'primevue';
import type { SessionStatus } from '@/types/models/session';
import { eventService } from '@/api/services/EventService.ts';
import { formatDate } from '@/utilities/formatDate.ts';

const props = defineProps<{
  classroomId: number;
  date: Date;
  startTime: string;
  endTime: string;
  status: SessionStatus;
}>();

const visible = ref(false);
const title = ref('');
const description = ref('');

const reserve = async () => {
  try {
    await eventService.reserve({
      user_id: 1,
      classroom_id: props.classroomId,
      date: formatDate(props.date),
      start_time: props.startTime,
      end_time: props.endTime,
      title: title.value,
      description: description.value,
    });

    visible.value = false;
    title.value = ''; // Clear input after submission
    description.value = ''; // Clear input after submission
  } catch (error) {
    console.error('Error reserving event:', error);
  }
};
</script>

<template>
  <Button
    v-if="status === 'reserved'"
    label="Reserved"
    disabled
    severity="contrast"
    size="small"
    icon="pi pi-exclamation-circle"
    iconPos="right"
    class="w-full"
  />
  <Button
    v-else
    label="Reserve"
    size="small"
    icon="pi pi-angle-right"
    iconPos="right"
    class="w-full"
    @click="visible = true"
  />

  <Dialog v-model:visible="visible" modal header="Reserve" :style="{ width: '25rem' }">
    <div class="flex items-center gap-4 mb-4">
      <InputText id="title" v-model="title" class="flex-auto" placeholder="Title" autocomplete="off" />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <InputText id="description" v-model="description" class="flex-auto" placeholder="Description" autocomplete="off" />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Reserve" @click="reserve"></Button>
    </div>
  </Dialog>
</template>
