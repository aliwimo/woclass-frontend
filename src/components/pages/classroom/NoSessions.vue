<script setup lang="ts">
import { Card } from 'primevue';
</script>

<template>
  <div class="flex flex-col gap-4">
    <Card>
      <template #content>
        <div>No sessions available on this Day!</div>
      </template>
    </Card>
  </div>
</template>
