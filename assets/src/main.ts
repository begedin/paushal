///<reference path="main.d.ts" />

import Vue from 'vue';
import Vuex from 'vuex';
import Router from 'vue-router';

import App from './App.vue';
import { RootState, createStore } from './store';
import { router } from './router';
import { ComponentOptions } from 'vue/types/umd';

Vue.use<RootState>(Vuex);
Vue.use(Router);

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
