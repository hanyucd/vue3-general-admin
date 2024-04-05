<template>
  <!-- 混合布局 -->
  <MixLayout
    v-if="layout.layout === 'mix'"
    :logo="layout.logo"
    :title="layout.title"
    :show-sider-trigger="layout.showSiderTrigger"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
  >
    <template #headerRight>
      <div>
        测试右侧插槽
      </div>
    </template>
    
    <router-view />
  </MixLayout>

  <!-- 左侧布局 -->
  <LeftLayout
    v-if="layout.layout === 'side'"
    :logo="layout.logo"
    :title="layout.title"
    :show-sider-trigger="layout.showSiderTrigger"
    :sider-width="layout.siderWidth"
    :sider-collapsed-width="layout.siderCollapsedWidth"
    :inverted="layout.layoutStyle === 'inverted'"
  >
    <template #headerRight>
      <div>
        测试右侧插槽
      </div>
    </template>
    
    <router-view />
  </LeftLayout>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores';
import MixLayout from '@/layout/layout-mix/layout-mix.vue';
import LeftLayout from '@/layout/layout-left/layout-left.vue';

const appStore = useAppStore();

const { layout } = storeToRefs(appStore);
</script>

<style scoped>

</style>
