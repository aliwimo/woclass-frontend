<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ClassroomType } from '@/types/models/classroom'
import { classroomService } from '@/api/services/classroomService.ts'
import { Card } from 'primevue'
import ViewTitle from '@/components/ui/ViewTitle.vue'

const classrooms = ref<ClassroomType[]>([])
const loading = ref<boolean>(false)

onMounted(async () => {
  try {
    loading.value = true
    classrooms.value = await classroomService.getClassrooms()
  } catch (error) {
    console.error('Error fetching classrooms:', error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <div>
    <ViewTitle title="Classrooms" subtitle="Lists all classrooms" />

    <div class="flex flex-col gap-4">
      <Card
        v-for="classroom in classrooms"
        :key="classroom.id"
      >
        <template #title>{{ classroom.name }}</template>
        <template #content>
          <p class="m-0">{{ classroom.description }}</p>
          <span class="m-0">Capacity: {{ classroom.capacity }}</span>
        </template>
      </Card>
    </div>

  </div>
</template>

