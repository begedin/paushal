import Router, { RouteConfig } from 'vue-router';
import CodePocView from '../views/CodePocView.vue';
import HomeView from '../views/HomeView.vue';

const HomeRoute: RouteConfig = { path: '/', component: HomeView };

const CodePocRoute: RouteConfig = { path: '/codepoc', component: CodePocView };

const routes = [HomeRoute, CodePocRoute];

export const router = new Router({ mode: 'history', routes });
