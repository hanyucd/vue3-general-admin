import { ILayoutTheme } from '@/types/layout';
import logo from '@/assets/vue.svg';

export const layoutThemeConfig: ILayoutTheme = {
  title: 'Naive admin Pro',
  layout: 'mix',
  layoutStyle: 'light',
  headerHeight: 48,
  logo,
  siderWidth: 240,
  siderCollapsedWidth: 48,
  showSiderTrigger: 'bar',
  collapsed: false,
  theme: 'default',
  fixed: true,
};
