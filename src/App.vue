<script>
import { RouterView } from 'vue-router'
import topBar from '@/components/topBar.vue'
import topBarMobile from '@/components/topBar_mobile.vue'
export default {
  data() {
    return {
      isMobile: window.matchMedia('(max-width: 767px)').matches
    }
  },
  computed: {
    currentComponent() {
      return this.isMobile ? topBarMobile : topBar;
    }
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenWidth);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenWidth);
  },
  methods: {
    checkScreenWidth() {
      this.isMobile = window.matchMedia('(max-width: 767px)').matches;
    }
  }
}
</script>

<template>
  <component :is="currentComponent" />
  <!-- <topBar></topBar>
  <topBarMobile></topBarMobile> -->
  <!-- <RouterView /> 的内容会根据当前的路由动态变化——它会渲染当前路由对应的组件。 -->
  <!-- RouterView的位置将会放置不同views的页面 -->
  <RouterView />
</template>


