<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { ClassroomType } from '@/types/models/classroom'
import { classroomService } from '@/api/services/classroom.service.ts'
import ViewTitle from '@/components/ui/ViewTitle.vue'
import ClassroomCard from '@/components/pages/classroom/ClassroomCard.vue'

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

    <div class="grid grid-cols-2 gap-4">
      <ClassroomCard
        v-for="classroom in classrooms"
        :key="classroom.id"
        :classroom="classroom"
        class="h-full"
      />
    </div>

  </div>
</template>

