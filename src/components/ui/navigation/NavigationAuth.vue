<script setup lang="ts">

import { useModalStore } from '@/stores/modal.ts'
import { useAuthStore } from '@/stores/authStore.ts'
import type { ModalKey } from '@/config/ModalService.ts'
import { Button } from 'primevue'
import LogoutButton from '@/components/ui/auth/LogoutButton.vue'

const modalStore = useModalStore();
const authStore = useAuthStore();

const openModal = (key: ModalKey) => {
  modalStore.openModal(key);
};

</script>
<template>
  <div>
    <div v-if="authStore.isAuthenticated">
      <LogoutButton />
    </div>
    <div v-else class="flex gap-4">
      <Button
        label="Register"
        size="small"
        icon="pi pi-user-plus"
        variant="text"
        severity="secondary"
        @click="openModal('register')"
      />
      <Button
        label="Login"
        size="small"
        icon="pi pi-user"
        @click="openModal('login')"
      />
    </div>
  </div>
</template>
