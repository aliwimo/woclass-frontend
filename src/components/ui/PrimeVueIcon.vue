<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{ name: string; }>()
</script>

<template>
  <span class="bg-gray-200 p-1 rounded size-6 flex items-center justify-center">
    <i :class=name style="font-size: .75rem"></i>
  </span>
</template>

<style scoped>

</style>
