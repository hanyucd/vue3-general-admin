import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useLayoutTheme } from '@/hooks/layoutThemeHook';

export const useAppStore = defineStore('appModule', () => {
  // const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()
  const defaultTheme = useLayoutTheme();
  const layout = reactive(unref(defaultTheme));

  console.log(defaultTheme);


  return {
    layout,
  };
});
