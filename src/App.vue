<script setup>
import { RouterLink, RouterView } from 'vue-router'
import topBar from '@/components/topBar.vue'
</script>

<template>
  <topBar></topBar>
  <!-- <RouterView /> 的内容会根据当前的路由动态变化——它会渲染当前路由对应的组件。 -->
  <!-- RouterView的位置将会放置不同views的页面 -->
  <RouterView />
</template>

<style scoped></style>
