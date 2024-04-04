import { layoutThemeConfig } from '@/config/layout-theme';
import { createGlobalState, useStorage } from '@vueuse/core';

export const useLayoutTheme = createGlobalState(() => {
  // console.log(useStorage('layout-theme', layoutThemeConfig));
  return useStorage('layout-theme', layoutThemeConfig);
});
