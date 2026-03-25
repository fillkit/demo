import { createRouter, createWebHistory } from 'vue-router';
import Registration from './pages/Registration.vue';
import ContactForm from './pages/ContactForm.vue';

export const router = createRouter({
  history: createWebHistory('/vue/'),
  routes: [
    {
      path: '/',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactForm,
    },
  ],
});
