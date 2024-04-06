<template>
  <!-- 移动布局 -->
  <MobileLayout
    v-if="isMobile"
    v-model:visible="visible"
    :logo="layout.logo"
  >
    <template #headerRight>
      <div>
        移动布局-右侧插槽
      </div>
    </template>

    <router-view />
  </MobileLayout>

  <template v-else>
    <!-- 混合布局 -->
    <MixLayout
      v-if="layout.layout === 'mix'"
      v-model:collapsed="layout.collapsed"
      :logo="layout.logo"
      :title="layout.title"
      :show-sider-trigger="layout.showSiderTrigger"
      :sider-width="layout.siderWidth"
      :sider-collapsed-width="layout.siderCollapsedWidth"
    >
      <template #headerRight>
        <div>
          混合布局-右侧插槽
        </div>
      </template>
      
      <router-view />
    </MixLayout>
  
    <!-- 左侧布局 -->
    <LeftLayout
      v-if="layout.layout === 'side'"
      v-model:collapsed="layout.collapsed"
      :logo="layout.logo"
      :title="layout.title"
      :show-sider-trigger="layout.showSiderTrigger"
      :sider-width="layout.siderWidth"
      :sider-collapsed-width="layout.siderCollapsedWidth"
      :inverted="layout.layoutStyle === 'inverted'"
    >
      <template #headerRight>
        <div>
          左侧布局-右侧插槽
        </div>
      </template>
      
      <router-view />
    </LeftLayout>
  
    <!-- 顶部布局 -->
    <TopLayout
      v-if="layout.layout === 'top'"
      v-model:collapsed="layout.collapsed"
      :logo="layout.logo"
      :title="layout.title"
    >
      <template #headerRight>
        <div>
          顶部布局-右侧插槽
        </div>
      </template>
      
      <router-view />
    </TopLayout>
  </template>
</template>

<script lang="ts" setup>
import MixLayout from '@/layout/layout-mix/layout-mix.vue';
import LeftLayout from '@/layout/layout-left/layout-left.vue';
import TopLayout from '@/layout/layout-top/layout-top.vue';
import MobileLayout from '@/layout/layout-mobile/layout-mobile.vue';

import { useQueryBreakpoints } from '@/hooks/queryBreakpointHook';
import { useAppStore } from '@/stores';

const appStore = useAppStore();
const { isMobile } = useQueryBreakpoints();

const { layout, visible } = storeToRefs(appStore);
</script>

<style scoped>

</style>
