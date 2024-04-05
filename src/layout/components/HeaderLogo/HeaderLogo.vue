<template>
  <n-image
    :src="src"
    :width="size"
    :height="size"
    :preview-disabled="true"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  src?: string;
  size?: number | string;
}>(), {
  size: 24
});
</script>

<style scoped>

</style>
