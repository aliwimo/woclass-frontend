<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { Button, InputText, Textarea } from 'primevue';
import type { SessionStatus } from '@/types/models/session';
import { eventService } from '@/api/services/EventService.ts';
import { formatDate } from '@/utilities/formatDate.ts';
import { useToast } from 'primevue/usetoast';

const props = defineProps<{
  classroomId: number
  date: Date
  startTime: string
  endTime: string
  status: SessionStatus
}>();

const router = useRouter();
const toast = useToast();
const visible = ref(false);
const title = ref('');
const description = ref('');

const clearData = () => {
  visible.value = false;
  title.value = '';
  description.value = '';
};

const reserve = async () => {
  try {
    await eventService.reserve({
      classroom_id: props.classroomId,
      date: formatDate(props.date),
      start_time: props.startTime,
      end_time: props.endTime,
      title: title.value,
      description: description.value,
    });
    clearData();
    toast.add({ severity: 'secondary', summary: 'Success!', life: 3000 });
    void router.push({ name: 'events' });
  } catch (error) {
    toast.add({ severity: 'error', summary: 'Failed!', detail: 'Please Check Event\'s Title', life: 3000 });
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
      <InputText
        id="title"
        v-model="title"
        class="flex-auto"
        placeholder="Title"
        autocomplete="off"
      />
    </div>
    <div class="flex items-center gap-4 mb-8">
      <Textarea
        id="description"
        v-model="description"
        placeholder="Description"
        fluid
        style="resize: none"
      />
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false" size="small" />
      <Button type="button" label="Reserve" @click="reserve" size="small" />
    </div>
  </Dialog>
</template>
