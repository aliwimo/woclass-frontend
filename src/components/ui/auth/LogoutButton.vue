<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/authStore'
import { Button } from 'primevue'

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
  authStore.logout();
  router.push({ name: 'home' });
};
</script>

<template>
  <Button
    label="Logout"
    size="small"
    icon="pi pi-sign-out"
    variant="text"
    severity="secondary"
    @click="handleLogout"
  />
</template>
