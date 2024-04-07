<template>
  <!-- Teleport 它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去 -->
  <Teleport to="body">
    <div class="fixed top-240px right-0 z-10">
      <n-button type="primary" class="b-rd-tr-0! b-rd-br-0!" size="large">
        <template #icon>
          <n-icon size="24">
            <SettingOutlined />
          </n-icon>
        </template>
      </n-button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { SettingOutlined } from '@vicons/antd';
</script>

<style scoped>

</style>
