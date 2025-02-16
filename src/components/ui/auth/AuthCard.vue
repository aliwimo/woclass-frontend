<script setup lang="ts">
import { Button, Card } from 'primevue';
import { useModalStore } from '@/stores/modal.ts';
import type { ModalKey } from '@/config/ModalService.ts';

const modalStore = useModalStore();
const openModal = (key: ModalKey) => modalStore.openModal(key);
</script>

<template>
  <Card class="w-full">
    <template #title>
      <div class="flex flex-col md:flex-row md:items-end gap-4 justify-between">
        <div class="flex flex-col">
          <span class="text-sm text-gray-500">Welcome to</span>
          <span class="text-teal-600 font-bold text-4xl">WoClass</span>
          <span class="text-sm text-gray-500">Please login or register to get started.</span>
        </div>

        <div class="flex gap-2">
          <Button
            label="Register"
            severity="secondary"
            icon="pi pi-user-plus"
            size="small"
            @click="openModal('register')"
          />
          <Button
            label="Login"
            severity="primary"
            icon="pi pi-user"
            size="small"
            @click="openModal('login')"
          />
        </div>
      </div>
    </template>
  </Card>
</template>
