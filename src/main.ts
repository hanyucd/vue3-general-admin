import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';
import router from './router';
import pinia from './stores';

import '@unocss/reset/tailwind.css'; // 样式重置
import 'virtual:uno.css';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

app.use(router);
app.use(pinia);
// app.use(i18n);

app.mount('#app');

// createApp(App).mount('#app');

// console.log(import.meta);
// console.log(import.meta.env);

