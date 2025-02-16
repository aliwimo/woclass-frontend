<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  startTime: string
  endTime: string
}>();
</script>

<template>
  <div class="flex gap-6">
    <div class="flex flex-col">
      <span class="text-xs">From</span>
      <span class="text-3xl font-bold">{{ startTime }}</span>
    </div>

    <div class="flex flex-col">
      <span class="text-xs">To</span>
      <span class="text-3xl font-bold">{{ endTime }}</span>
    </div>
  </div>
</template>
