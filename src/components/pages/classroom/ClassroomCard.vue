<script setup lang="ts">
import { Card, Button, Chip } from 'primevue';
import { defineProps } from 'vue';
import type { ClassroomType } from '@/types/models/classroom';

defineProps<{ classroom: ClassroomType }>();
</script>

<template>
  <Card>
    <template #title>
      <span class="text-teal-600">{{ classroom.name }}</span>
    </template>
    <template #content>
      <p class="line-clamp-2">{{ classroom.description }}</p>
    </template>
    <template #footer>
      <div class="flex justify-between">
        <div class="flex gap-1 items-center">
          <Chip icon="pi pi-users" />
          <span class="text-sm">{{ classroom.capacity }}</span>
        </div>

        <div class="flex justify-end gap-4 mt-1">
          <Button
            as="router-link"
            :to="`classrooms/${classroom.id}`"
            label="Show"
            size="small"
            icon="pi pi-angle-right"
            iconPos="right"
          />
        </div>
      </div>
    </template>
  </Card>
</template>
