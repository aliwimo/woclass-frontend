<script setup lang="ts">
import Navigation from '@/components/ui/layout/NavigationMenu.vue'
</script>

<template>
  <header class="h-20 flex justify-center items-center px-10">
    <Navigation />
  </header>
  <RouterView class="max-w-4xl mx-auto p-10"/>
</template>

<style scoped>

</style>
