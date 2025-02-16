<script setup lang="ts">

import { ref } from 'vue'
import Menubar from 'primevue/menubar';
import { Button } from 'primevue'

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
  <div class="w-full h-20 flex flex-row items-center justify-center gap-4 bg-white">
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
    <div>

    </div>
  </div>
</template>
