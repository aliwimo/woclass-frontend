<script setup lang="ts">
import { Dialog, Button, InputText, Message, Password } from 'primevue';
import { Form, FormField, type FormSubmitEvent } from '@primevue/forms';
import { RegisterResolver } from '@/api/reslovers/RegisterResolver.ts';
import { useToast } from 'primevue/usetoast';
import { useAuthStore } from '@/stores/authStore.ts';

const emit = defineEmits(['close']);
const toast = useToast();
const authStore = useAuthStore();

const submitForm = async (form: FormSubmitEvent) => {
  if (form.valid) {
    try {
      await authStore.register({
        name: form.states.name.value,
        email: form.states.email.value,
        password: form.states.password.value,
        password_confirmation: form.states.password_confirmation.value,
      });
      toast.add({ severity: 'secondary', summary: 'Success!', life: 3000 });
      emit('close');
    } catch (error: any) {
      toast.add({ severity: 'error', summary: 'Failed!', life: 3000 });
      console.error(error);
    }
  }
};
</script>

<template>
  <Dialog visible modal dismissableMask header="Register">
    <Form
      :resolver="RegisterResolver"
      @submit="submitForm"
      :validateOnBlur="true"
      :validate-on-value-update="false"
      class="flex flex-col gap-4 w-full"
    >
      <FormField
        v-slot="$field"
        name="name"
        initialValue="Mohamed Aliwi"
        class="flex flex-col gap-1"
      >
        <InputText type="text" placeholder="Name" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
          $field.error?.message
        }}</Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="email"
        initialValue="test@example.com"
        class="flex flex-col gap-1"
      >
        <InputText type="text" placeholder="Email" />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
          $field.error?.message
        }}</Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="password"
        initialValue="password"
        class="flex flex-col gap-1"
      >
        <Password type="text" placeholder="Password" :feedback="false" toggleMask fluid />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
          $field.error?.message
        }}</Message>
      </FormField>

      <FormField
        v-slot="$field"
        name="password_confirmation"
        initialValue="password"
        class="flex flex-col gap-1"
      >
        <Password
          type="text"
          placeholder="Password Confirmation"
          :feedback="false"
          toggleMask
          fluid
        />
        <Message v-if="$field?.invalid" severity="error" size="small" variant="simple">{{
          $field.error?.message
        }}</Message>
      </FormField>

      <Button type="submit" severity="primary" label="Register" />
    </Form>
  </Dialog>
</template>
