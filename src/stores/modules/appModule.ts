import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAppStore = defineStore('appModule', () => {
  const defaultTheme = ref('def-theme');

  return {
    defaultTheme
  };
});
