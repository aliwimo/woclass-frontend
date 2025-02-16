<script setup lang="ts">
import NavigationLinks from '@/components/ui/navigation/NavigationLinks.vue';
import NavigationAuth from '@/components/ui/navigation/NavigationAuth.vue';
</script>

<template>
  <div class="w-full h-20 flex flex-row items-center justify-between gap-4 bg-white px-8 shadow">
    <NavigationLinks />
    <NavigationAuth />
  </div>
</template>
