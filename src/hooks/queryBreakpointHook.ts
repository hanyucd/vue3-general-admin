import { useBreakpoints } from '@vueuse/core';

export const breakpointsEnum = {
  xl: 1600,
  lg: 1199,
  md: 991,
  sm: 767,
  xs: 575,
};

/**
 * 响应式布局的一个重要组成部分是响应式断点
 */
export const useQueryBreakpoints = () => {
  const breakpoints = reactive(useBreakpoints(breakpointsEnum));

  // 手机端
  const isMobile = breakpoints.smaller('sm');
  // pad端
  const isPad = breakpoints.between('sm', 'md');
  // pc端
  const isDesktop = breakpoints.greater('md');

  return {
    breakpoints,
    isMobile,
    isPad,
    isDesktop,
  };
};
