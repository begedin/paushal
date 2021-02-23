/// <reference path="main.d.ts" />
/* globals process */

import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import App from './App.vue';
import { RootState, createStore } from './store';
import { router } from './router';
import { ComponentOptions } from 'vue/types/umd';
import GAuth from 'vue-google-oauth2';

const gauthOption = {
  clientId: process.env.GOOGLE_CLIENT_ID,
  scope: 'profile email',
  prompt: 'select_account',
};
Vue.use(GAuth, gauthOption);

Vue.use(Router);

Vue.use<RootState>(Vuex);
const store = createStore();

const options: ComponentOptions<Vue> = {
  components: { App },
  el: '#app',
  name: 'paushal',
  router,
  store,
  render: (h) => h(App),
};

export default new Vue(options);
