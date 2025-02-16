import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import App from './App.vue'
import router from './router'
import { Noir } from '@/theme.ts'
import { useAuthStore } from '@/stores/authStore.ts'


const app = createApp(App)

app.use(createPinia())

const authStore = useAuthStore();
if (authStore.token) {
  authStore.isAuthenticated = true;
}

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      darkModeSelector: 'class',
    }
  }
});
app.use(ToastService);


app.mount('#app')
