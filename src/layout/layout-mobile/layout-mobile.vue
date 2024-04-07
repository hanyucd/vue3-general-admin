
<template>
  <n-layout class="h-screen" style="--n-color:var(--pro-admin-layout-content-bg)">
    <n-layout-header
      :inverted="headerInverted"
      class="pro-admin-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <HeaderLogo :src="logo" />
        <n-icon size="20" class="ml-2" @click="onShow">
          <MenuUnfoldOutlined />
        </n-icon>
      </div>

      <slot name="headerRight">
        <div>
          右侧
        </div>
      </slot>
    </n-layout-header>

    <AppMain content-style="padding: 24px;">
      <slot />
    </AppMain>
  </n-layout>

  <!-- 菜单 drawer -->
  <n-drawer
    :show="visible"
    :width="240"
    placement="left"
    @update:show="(val) => $emit('update:visible', val)"
  >
    <n-drawer-content body-content-style="padding:0">
      <n-layout class="h-100%">
        <n-layout-header class="h-100%" :inverted="drawerInverted">
          <div class="flex items-center justify-center pt-24px">
            <HeaderLogo :src="logo" size="30" />
            <HeaderTitle :title="title" size="22" />
          </div>
        </n-layout-header>
      </n-layout>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import HeaderLogo from '../components/HeaderLogo/HeaderLogo.vue';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle.vue';
import AppMain from '../components/AppMain/AppMain.vue';
import { MenuUnfoldOutlined } from '@vicons/antd';

const props = withDefaults(defineProps<{
  headerHeight?: number;
  logo?: string;
  title?: string;
  inverted?: boolean;
  visible?: boolean;
  headerInverted?: boolean;
  drawerInverted?: boolean;
}>(), {
  headerHeight: 48,
  visible: false,
  drawerInverted: true
});

const emit = defineEmits(['update:visible']);

const headerHeightVar = computed(() => `${props.headerHeight}px`);

/**
 * 打开 drawer
 */
const onShow = () => {
  emit('update:visible', true);
};
</script>

<style scoped>
.pro-admin-mix-layout-header{
  height: v-bind(headerHeightVar);
}
</style>
