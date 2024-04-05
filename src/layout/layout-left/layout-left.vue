<template>
  <n-layout has-sider class="h-screen">
    <SideBar
      :inverted="inverted"
      :collapsed-width="siderCollapsedWidth"
      :width="siderWidth"
      :show-trigger="showSiderTrigger"
      content-style="padding: 24px;"
    >
      <div class="flex items-center">
        <HeaderLogo :src="logo" />
        <HeaderTitle :title="title" />
      </div>
      侧边栏
    </SideBar>
    
    <n-layout>
      <n-layout-header class="pro-admin-layout-header flex items-center justify-between px-4" />

      <AppMain content-style="padding: 24px;">
        左边布局
        <router-view />
      </AppMain>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import HeaderLogo from '../components/HeaderLogo/HeaderLogo.vue';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle.vue';
import SideBar from '../components/SideBar/SideBar.vue';
import AppMain from '../components/AppMain/AppMain.vue';

const props = withDefaults(defineProps<{
  headerHeight?: number;
  logo?: string;
  title?: string;
  siderWidth?: number;
  siderCollapsedWidth?: number;
  showSiderTrigger?: boolean | 'bar' | 'arrow-circle';
  inverted?: boolean; // 反转色
}>(), {
  headerHeight: 48,
  siderWidth: 240,
  siderCollapsedWidth: 48,
});
const headerHeightVar = computed(() => `${props.headerHeight}px`);
// const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`);
</script>

<style scoped>
.pro-admin-layout-header{
  height: v-bind(headerHeightVar);
}
</style>
