
<template>
  <n-layout class="h-screen">
    <n-layout-header inverted class="pro-admin-mix-layout-header flex justify-between items-center px-4">
      <div class="flex items-center">
        <HeaderLogo :src="logo" />
        <HeaderTitle :title="title" />
      </div>
      <slot name="headerRight">
        <div>右边</div>
      </slot>
    </n-layout-header>

    <n-layout has-sider class="pro-admin-mix-layout-content">
      <n-layout-sider content-style="padding: 24px;">
        海淀桥
      </n-layout-sider>

      <n-layout-content content-style="padding: 24px;">
        <slot />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>
import HeaderLogo from '../components/HeaderLogo/HeaderLogo.vue';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle.vue';
// import Title from '~/layouts/common/title.vue';

const props = withDefaults(defineProps<{
  headerHeight?: number;
  logo?: string;
  title?: string;
}>(), {
  headerHeight: 48,
});

// 头部高度
const headerHeightVar = computed(() => `${props.headerHeight}px`);
// 内容高度
const contentHeightVar = computed(() => `calc(100vh - ${ props.headerHeight }px)`);
</script>

<style lang="scss" scoped>
.pro-admin-mix-layout-header {
  height: v-bind(headerHeightVar);
}

.pro-admin-mix-layout-content {
  height: v-bind(contentHeightVar);
}
</style>
