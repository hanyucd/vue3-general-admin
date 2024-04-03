import { createApp } from 'vue';
// import './style.css';
import App from './App.vue';

import '@unocss/reset/tailwind.css'; // 样式重置
import 'virtual:uno.css';

const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

// app.use(router);
// app.use(i18n);
// app.use(pinia);

app.mount('#app');

// createApp(App).mount('#app');

console.log(import.meta.env);
console.log(import.meta);

