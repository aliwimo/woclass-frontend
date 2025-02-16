<script setup lang="ts">
import ViewTitle from '@/components/ui/ViewTitle.vue';
import { useAuthStore } from '@/stores/authStore.ts'
import ClassroomList from '@/components/pages/classroom/ClassroomList.vue'
import AuthCard from '@/components/ui/auth/AuthCard.vue'

const authStore = useAuthStore();
</script>

<template>
  <div>
    <ViewTitle title="Home" subtitle="Home of WoClass!" />
    <ClassroomList v-if="authStore.isAuthenticated" />
    <AuthCard v-else />
  </div>
</template>
