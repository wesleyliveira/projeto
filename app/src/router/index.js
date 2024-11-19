import { createRouter, createWebHistory } from 'vue-router';
import Clients from '../components/Client.vue';

const routes = [
  { path: '/client', component: Clients },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
