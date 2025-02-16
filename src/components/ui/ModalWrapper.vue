<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';

const modalStore = useModalStore();
const { isModalOpen, modalComponent } = storeToRefs(modalStore);
const { closeModal } = modalStore;
</script>

<template>
  <div v-if="isModalOpen" class="modal-overlay">
    <div class="modal-content">
      <component :is="modalComponent" @close="closeModal" v-model:visible="isModalOpen" />
    </div>
  </div>
</template>
