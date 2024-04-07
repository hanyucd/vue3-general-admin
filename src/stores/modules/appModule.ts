import { defineStore } from 'pinia';
import { ref } from 'vue';

import { useLayoutTheme } from '@/hooks/layoutThemeHook';

export const useAppStore = defineStore('appModule', () => {
  // const defaultTheme = import.meta.env.DEV ? layoutThemeConfig : useLayoutTheme()
  const defaultTheme = useLayoutTheme();
  // 布局模式
  const layout = reactive(unref(defaultTheme));
  // 移动端布局模式-是否打开左侧菜单 drawer
  const visible = ref(false);

  // 移动端布局模式 绑定是否打开菜单 drawer
  const toggleVisible = (val: boolean) => {
    visible.value = val;
  };

  // pc 布局模式 是否打开侧边栏
  const toggleCollapsed = (val: boolean) => {
    layout.collapsed = val;
  };

  console.log(defaultTheme);

  return {
    layout,
    visible,
    toggleVisible,
    toggleCollapsed
  };
});
