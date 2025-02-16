// src/config/ModalService.ts

import LoginModal from '@/components/ui/auth/LoginModal.vue'
import RegisterModal from '@/components/ui/auth/RegisterModal.vue'

export const ModalMap = {
  login: LoginModal,
  register: RegisterModal,
};

export type ModalKey = keyof typeof ModalMap;
