<script setup lang="ts">
import { defineProps } from 'vue';
import PrimeVueIcon from '@/components/ui/PrimeVueIcon.vue';

defineProps<{
  value: string
  iconName: string
}>();
</script>

<template>
  <div class="flex items-center gap-1">
    <PrimeVueIcon :name="iconName" />
    <span>{{ value }}</span>
  </div>
</template>

<style scoped></style>
