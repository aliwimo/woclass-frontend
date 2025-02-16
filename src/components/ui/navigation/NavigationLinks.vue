<script setup lang="ts">

import { Button } from 'primevue'
import { ref } from 'vue'

interface Link {
  label: string,
  route: string,
  icon: string,
}

const links = ref<Link[]>([
  {
    label: 'Home',
    route: '/',
    icon: 'pi pi-home'
  },
  {
    label: 'Events',
    route: '/events',
    icon: 'pi pi-star'
  }
]);

</script>

<template>
  <div>
    <Button
      v-for="(link, index) in links"
      :key="index"
      as="router-link"
      :label="link.label"
      :to="link.route"
      variant="text"
      severity="secondary"
      size="small"
    />
  </div>
</template>
