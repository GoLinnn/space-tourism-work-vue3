<script>
import service from '@/service/service.js'
export default {
  data() {
    return {
      technologies: [],
      currentImage: '/src/assets/technology/image-launch-vehicle-portrait.jpg',
      id: 0
    }
  },
  async created() {
    this.technologies = await service.getData('technology')
  },
  mounted() {
    document.body.setAttribute("class", "techBody")
  },
  beforeDestroy() {
    document.body.removeAttribute("class", "techBody")
  },
  methods: {
    updateTech(technology, index) {
      this.currentImage = technology.images.portrait;
      this.id = index;
    }
  }
}
</script>

<template>
  <h3 class="font2"><span>03</span>SPACE LAUNCH 101</h3>
  <!-- 移动端图片位置 -->
  <div class="launchImgMove"></div>
  <div class="launchbox">
    <ul class="leftnav">
      <li v-for="(technology, index) in technologies" :key="index"><a href="#" class="font1"
          :class="{ active: id === index }" @click="updateTech(technology, index)">{{ index + 1 }}</a></li>
    </ul>
    <div class="launch" v-if="technologies.length > 0">
      <h4 class="font2">THE TERMINOLOGU...</h4>
      <h2 class="font1" id="launchName">{{ technologies[id].name.toUpperCase() }}</h2>
      <p class="font3">{{ technologies[id].description }}</p>
    </div>
  </div>
  <!-- PC端图片位置 -->
  <div v-if="technologies.length > 0" class="launchImg" :style="{ background: `url(${currentImage}) no-repeat` }"></div>
</template>
<style>
@media screen and (min-width: 375px) and (max-width: 767px) {
  .techBody {
    background: url('../assets/technology/background-technology-mobile.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 768px) {
  .techBody {
    background: url('../assets/technology/background-technology-tablet.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 1040px) {
  .techBody {
    background: url('../assets/technology/background-technology-desktop.jpg') no-repeat;
    background-size: cover;
  }
}

h3 {
  margin-left: 11vw;
  margin-top: 50px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media screen and (min-width: 1040px) {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
}

h3 span {
  font-weight: bold;
  color: var(--home-foreground-25);
  margin-right: 20px;
}

/* 主体 */
/* 左侧导航栏 */
.launchbox {
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin: 20px auto;
    text-align: center;
  }

  @media screen and (min-width: 1040px) {
    margin-left: 166px;
    margin-top: 100px;
  }
}

.launchbox .leftnav {
  text-align: center;

  @media screen and (min-width: 375px) and (max-width: 1039px) {
    width: 100vw;
    margin-top: 20px;
  }

  @media screen and (min-width: 1040px) {
    width: 5vw;
  }
}

.launchbox .leftnav li {
  @media screen and (min-width: 375px) and (max-width: 1039px) {
    display: inline-block;
  }

}


.launchbox .leftnav a {
  display: block;
  color: var(--home-foreground);
  background-color: var(--home-foreground-oval-before);
  border-radius: 50%;
  border: 1px solid var(--home-foreground-25);
  transition: all .6s;

  @media screen and (min-width: 375px) and (max-width: 768px) {
    float: left;
    width: 40px;
    height: 40px;
    font-size: 16px;
    line-height: 40px;
    margin: 0 5px;
  }

  @media screen and (min-width: 768px) {
    float: left;
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    margin: 0 5px;
  }

  @media screen and (min-width: 1040px) {
    width: 80px;
    height: 80px;
    font-size: 32px;
    line-height: 80px;
    margin-bottom: 32px;
  }
}

.launchbox .leftnav .active {
  color: var(--home-background);
  background-color: var(--home-foreground);
}

.launchbox .leftnav a:hover {
  border: 1px solid var(--home-foreground);
}

.launchbox .launch {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 375px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    margin: 20px auto;
  }

  @media screen and (min-width: 1040px) {
    margin-left: 80px;
  }
}

.launchbox .launch h4 {
  font-size: 16px;
  letter-spacing: 2.7px;
  color: var(--home-midground);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 14px;
    margin: 10px auto;
  }
}

.launchbox .launch #launchName {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 24px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-top: 10px;
  }

  @media screen and (min-width: 1040px) {
    font-size: 56px;
    margin-top: 20px;
  }
}

.launchbox .launch p {
  width: 444px;
  margin-top: 20px;
  color: var(--home-midground);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 100%;
    padding: 0 20px 0 20px;
    font-size: 15px;
    line-height: 25px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (min-width: 1040px) {
    font-size: 18px;
    line-height: 32px;
  }
}

.launchImg {
  float: right;
  margin-top: -350px;
  width: 450px;
  height: 450px;
  background-size: 100%;

  @media screen and (min-width: 375px) {
    display: none;
  }

  @media screen and (min-width: 1040px) {
    display: block;
  }
}

.launchImgMove {
  width: 100vw;
  height: 310px;
  margin-top: 60px;
  background: url(../assets/technology/image-launch-vehicle-landscape.jpg) no-repeat;
  background-size: 100%;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    height: 140px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1040px) {
    display: none;
  }
}
</style>
