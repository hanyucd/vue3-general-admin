
export interface ILayoutTheme {
  title?: string;
  layout: 'mix' | 'side' | 'top';
  layoutStyle: 'inverted' | 'light' | 'dark';
  headerHeight: number;
  logo?: string;
  siderWidth: number;
  siderCollapsedWidth: number;
  showSiderTrigger: boolean | 'bar' | 'arrow-circle';
  collapsed: boolean;
  theme: string;
  fixed: boolean;
}

export interface ILayoutType {
  id: string;
  key: 'mix' | 'side' | 'top';
  title: string;
  inverted?: boolean;
  dark?: boolean;
}
