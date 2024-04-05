<template>
  <!-- v-bind 通过不带参数的 v-bind 动态绑定多个值 -->
  <n-layout-content v-bind="attrs" style="--n-color: var(--pro-admin-layout-content-bg)">
    <slot />
  </n-layout-content>
</template>

<script setup lang="ts">
// 透传 Attributes
const attrs = useAttrs();
</script>

<style scoped>

</style>
