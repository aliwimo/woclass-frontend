// stores/modal.ts

import { defineStore } from 'pinia';
import { type ModalKey, ModalMap } from '@/config/ModalService.ts'

export const useModalStore = defineStore('modal', {
  state: () => ({
    isModalOpen: false,
    currentModal: null as ModalKey | null,
  }),
  actions: {
    openModal(key: ModalKey) {
      this.currentModal = key;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentModal = null;
    },
  },
  getters: {
    modalComponent: (state) => {
      if (state.currentModal && ModalMap[state.currentModal]) {
        return ModalMap[state.currentModal];
      }
      return null;
    },
  },
});
