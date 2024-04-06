
<template>
  <n-layout class="h-screen" style="--n-color:var(--pro-admin-layout-content-bg)">
    <n-layout-header
      :inverted="inverted"
      class="pro-admin-mix-layout-header flex justify-between items-center px-4"
    >
      <div class="flex items-center">
        <HeaderLogo :src="logo" />
        <HeaderTitle :title="title" />
      </div>
      <slot name="headerRight">
        <div>
          顶部右侧
        </div>
      </slot>
    </n-layout-header>

    <AppMain content-style="padding: 24px;">
      <slot />
    </AppMain>
  </n-layout>
</template>

<script lang="ts" setup>
import HeaderLogo from '../components/HeaderLogo/HeaderLogo.vue';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle.vue';
import AppMain from '../components/AppMain/AppMain.vue';

const props = withDefaults(defineProps<{
  headerHeight?: number;
  logo?: string;
  title?: string;
  inverted?: boolean;
}>(), {
  headerHeight: 48,
});

const headerHeightVar = computed(() => `${props.headerHeight}px`);
</script>

<style scoped>
.pro-admin-mix-layout-header{
  height: v-bind(headerHeightVar);
}
</style>
