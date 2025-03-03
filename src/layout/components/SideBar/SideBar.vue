<template>
  <n-layout-sider v-bind="attrs" collapse-mode="width">
    <slot />
  </n-layout-sider>
</template>

<script setup lang="ts">
// 透传
const attrs = useAttrs();
</script>

<style scoped>

</style>
