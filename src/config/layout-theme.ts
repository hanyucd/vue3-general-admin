import { ILayoutTheme } from '@/types/layout';
import logo from '@/assets/vue.svg';

export const layoutThemeConfig: ILayoutTheme = {
  title: 'Naive admin Pro',
  // layout: 'mix',
  // layout: 'side',
  layout: 'top',
  // layoutStyle: 'light',
  layoutStyle: 'inverted',
  headerHeight: 48,
  logo,
  siderWidth: 240, // 侧边栏宽度
  siderCollapsedWidth: 50, // 侧边栏收起的宽度
  showSiderTrigger: 'bar', // 侧边栏默认的触发方式
  collapsed: false,
  theme: 'default',
  fixed: true,
};
