<script setup lang="ts">

import { ref } from 'vue'
import Menubar from 'primevue/menubar';


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
  },
]);

</script>

<template>
  <nav class="flex justify-center">
    <Menubar :model="links" rounded-full>
      <template #item="{ item, props }">
        <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
          </a>
        </RouterLink>
      </template>
    </Menubar>
  </nav>
</template>
