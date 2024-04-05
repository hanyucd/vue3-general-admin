<template>
  <MixLayout v-if="layout.layout === 'mix'">
    <router-view />
  </MixLayout>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores';
import MixLayout from '@/layout/layout-mix/layout-mix.vue';
const appStore = useAppStore();

const { layout } = storeToRefs(appStore);
</script>

<style scoped>

</style>
