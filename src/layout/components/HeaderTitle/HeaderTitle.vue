<template>
  <span v-if="title" class="ml-2 truncate" :style="titleStyle">
    {{ title }}
  </span>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue';

const props = withDefaults(defineProps<{
  size?: number | string;
  title?: string;
}>(), {
  size: 24
});

const titleStyle = computed<CSSProperties>(() => ({ fontSize: `${props.size}px`, }));
</script>

<style scoped>

</style>
