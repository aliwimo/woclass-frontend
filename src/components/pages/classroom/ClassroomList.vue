<script setup lang="ts">

import ClassroomCard from '@/components/pages/classroom/ClassroomCard.vue'
import { onMounted, ref } from 'vue'
import type { ClassroomType } from '@/types/models/classroom'
import { classroomService } from '@/api/services/classroom.service.ts'

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
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClassroomCard
      v-for="classroom in classrooms"
      :key="classroom.id"
      :classroom="classroom"
      class="h-full"
    />
  </div>
</template>
