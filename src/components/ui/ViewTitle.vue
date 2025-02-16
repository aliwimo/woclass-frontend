<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-1 mb-8">
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <p v-if="subtitle" class="text-sm text-gray-600">{{ subtitle }}</p>
  </div>
</template>
