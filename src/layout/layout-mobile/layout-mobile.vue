
<template>
  <n-layout class="h-screen" style="--n-color:var(--pro-admin-layout-content-bg)">
    <n-layout-header
      :inverted="inverted"
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
    <n-drawer-content>
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import HeaderLogo from '../components/HeaderLogo/HeaderLogo.vue';
import AppMain from '../components/AppMain/AppMain.vue';
import { MenuUnfoldOutlined } from '@vicons/antd';

const props = withDefaults(defineProps<{
  headerHeight?: number;
  logo?: string;
  title?: string;
  inverted?: boolean;
  visible?: boolean;
}>(), {
  headerHeight: 48,
  visible: false,
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
