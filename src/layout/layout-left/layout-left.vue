<template>
  <n-layout has-sider class="h-screen">
    <SideBar
      :inverted="inverted"
      :collapsed="collapsed"
      :collapsed-width="siderCollapsedWidth"
      :width="siderWidth"
      :show-trigger="showSiderTrigger"
      @update:collapsed="($event) => $emit('update:collapsed', $event)"
    >
      <div class="flex items-center justify-center mt-24px">
        <HeaderLogo :src="logo" size="30" />
        <HeaderTitle v-if="!collapsed" :title="title" size="22" />
      </div>
      侧边栏
    </SideBar>
    
    <n-layout>
      <n-layout-header class="pro-admin-layout-header flex items-center justify-between px-4">
        <slot name="headerLeft">
          <div />
        </slot>
        <slot name="headerRight">
          <div />
        </slot>
      </n-layout-header>

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
  collapsed?: boolean;
}>(), {
  headerHeight: 48,
  inverted: false,
  collapsed: false,
});

defineEmits(['update:collapsed']);

const headerHeightVar = computed(() => `${props.headerHeight}px`);
// const contentHeightVar = computed(() => `calc(100vh - ${props.headerHeight}px)`);
</script>

<style scoped>
.pro-admin-layout-header{
  height: v-bind(headerHeightVar);
}
</style>
