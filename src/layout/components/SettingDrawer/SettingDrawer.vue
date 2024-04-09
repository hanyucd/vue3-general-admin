<template>
  <!-- Teleport 它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去 -->
  <Teleport to="body">
    <div class="fixed top-240px right-0 z-10">
      <n-button type="primary" class="b-rd-tr-0! b-rd-br-0!" size="large" @click="handleClick(true)">
        <template #icon>
          <n-icon size="24">
            <SettingOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </Teleport>

  <!-- 设置 drawer -->
  <n-drawer v-model:show="show" width="300">
    <n-drawer-content>
      这里是内容区域
      <n-space size="large">
        <!-- <LayoutSelect /> -->

        <!-- <LayoutSelect checked /> -->
        <LayoutSelect layout="side" checked />
        <LayoutSelect layout="mix" />
        <LayoutSelect layout="top" />
      </n-space>
    </n-drawer-content>

    <div class="absolute top-240px right-300px">
      <!-- 关闭按钮 -->
      <n-button type="primary" class="b-rd-tr-0! b-rd-br-0!" size="large" @click="handleClick(false)">
        <template #icon>
          <n-icon size="24">
            <CloseOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </n-drawer>
</template>

<script lang="ts" setup>
import LayoutSelect from './components/LayoutSelect/LayoutSelect.vue';
import { SettingOutlined, CloseOutlined } from '@vicons/antd';

// 是否打开 设置 drawer
const show = ref(true);

/**
 * 打开、关闭 drawer
 */
const handleClick = (val: boolean) => {
  show.value = val;
};
</script>

<style scoped>

</style>
