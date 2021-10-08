import { createApp } from 'vue';
import { i18n } from './i18n';
import store from './store'
import App from './App.vue';
import router from './router';

const app = createApp(App)
    .use(store)
    .use(router)
    .use(i18n);

app.mount('#app');
