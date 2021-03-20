/// <reference path="main.d.ts" />
import { createApp } from 'vue';

import App from '@/App.vue';
import { store } from '@/store';
import { router } from '@/router';
import { gAuth } from '@/auth/google';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(gAuth);

app.mount('#app');
