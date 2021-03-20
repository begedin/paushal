import { createRouter, createWebHistory } from 'vue-router';
import CodePocView from '@/views/CodePocView.vue';
import HomeView from '@/views/HomeView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/codepoc', component: CodePocView },
  ],
});
