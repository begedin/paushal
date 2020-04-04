///<reference path="main.d.ts" />

import 'phoenix_html';

// import socket from "./socket"

import Vue from 'vue';
import App from './App.vue';

new Vue({
  render: (h) => h(App),
}).$mount('#app');
