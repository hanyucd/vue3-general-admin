import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);

// 导出 pinia 实例,给 main 使用
export default pinia;

// 统一导出
export * from './modules/appModule';
export * from './modules/userModule';
