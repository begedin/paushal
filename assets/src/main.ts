///<reference path="main.d.ts" />

import 'phoenix_html';
import Vuex from 'vuex';

// import socket from "./socket"

import Vue from 'vue';
import App from './App.vue';
import { RootState, createStore } from './store';

Vue.use<RootState>(Vuex);

new Vue({
  render: (h) => h(App),
  store: createStore(),
}).$mount('#app');
