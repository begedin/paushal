///<reference path="main.d.ts" />

import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { RootState, createStore } from './store';

Vue.use<RootState>(Vuex);

const store = createStore();

export default new Vue({
  el: '#app',
  name: 'paushal',
  components: { App },
  store,
  render(h) {
    return h(App);
  },
});
