<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import ViewTitle from '@/components/ui/ViewTitle.vue';
import { useRoute } from 'vue-router';
import DatePicker from 'primevue/datepicker';
import ClassroomSessions from '@/components/pages/classroom/ClassroomSessions.vue';

const route = useRoute();

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
const nextMonth = month === 11 ? 0 : month + 1;
const nextYear = nextMonth === 0 ? year + 1 : year;

const date = ref();
const minDate = ref(new Date());
const maxDate = ref(new Date());
const classroomId = ref<number>(0);

minDate.value.setMonth(month);
minDate.value.setFullYear(year);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);

const updateClassroomId = () => {
  classroomId.value = parseInt(route.params.classroom_id as string);
};

onMounted(updateClassroomId);
watch(() => route.params.classroom_id, updateClassroomId);

</script>

<template>
  <div>
    <ViewTitle title="Classroom" />

    <div class="max-w-96 mx-auto w-full mb-10">
      <div class="text-center text-sm text-gray-600 mb-4">Select a date to show sessions</div>
      <DatePicker
        v-model="date"
        :minDate="minDate"
        :maxDate="maxDate"
        :manualInput="true"
        dateFormat="yy-mm-dd"
        showIcon
        fluid
        :inline="false"
        iconDisplay="input"
      />
    </div>

    <ClassroomSessions :date="date" :classroomId="classroomId" />
  </div>
</template>
