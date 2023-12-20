<script>
import service from '@/service/service.js'
export default {
  data() {
    return {
      crews: [],
      currentImage: '/src/assets/crew/image-douglas-hurley.png',
      id: 0
    }
  },
  async created() {
    this.crews = await service.getData('crew')
  },
  mounted() {
    document.body.setAttribute("class", "crewBody")
  },
  beforeDestroy() {
    document.body.removeAttribute("class", "crewBody")
  },
  methods: {
    updateCrew(crew, index) {
      this.currentImage = crew.images.png;
      this.id = index;
    }
  }
}
</script>

<template>
  <h3 class="font2"><span>02</span>MEET YOUR CREW</h3>
  <div class="peopleBox">
    <div class="peopleImg_mobile"></div>
    <div class="people">
      <ul class="bottomnav bottomnav_mobile">
        <li v-for="(crew, index) in crews" :key="index"><a href="#" :class="{ active: id === index }"
            @click="updateCrew(crew, index)"></a></li>
      </ul>
      <div class="des" v-if="crews.length > 0">
        <h4 class="font1" id="role">{{ crews[id].role.toUpperCase() }}</h4>
        <h2 class="font1" id="name">{{ crews[id].name.toUpperCase() }}</h2>
        <p class="font3">{{ crews[id].bio }}</p>
      </div>
      <ul class="bottomnav bottomnav_nomobile">
        <li v-for="(crew, index) in crews" :key="index"><a href="#" :class="{ active: id === index }"
            @click="updateCrew(crew, index)"></a></li>
      </ul>
    </div>
    <div v-if="crews.length > 0" class="peopleImg" :style="{ background: `url(${currentImage}) no-repeat` }"></div>
  </div>
</template>

<style>
@media screen and (min-width: 375px) and (max-width: 767px) {
  .crewBody {
    background: url('../assets/crew/background-crew-mobile.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 768px) {
  .crewBody {
    background: url('../assets/crew/background-crew-tablet.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 1440px) {
  .crewBody {
    background: url('../assets/crew/background-crew-desktop.jpg') no-repeat;
    background-size: cover;
  }
}

h3 {
  margin-left: 11vw;
  margin-top: 50px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 16px;
    letter-spacing: 2.7px;
    text-align: center;
    margin-left: 0;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
}

h3 span {
  font-weight: bold;
  color: var(--home-foreground-25);
  margin-right: 20px;
}

/* 描述文字 */
.peopleBox {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 375px) and (max-width: 767px) {
  .peopleImg_mobile {
    width: 327px;
    height: 200px;
    margin: 20px auto;
    background: url('../assets/crew/image-douglas-hurley.png') no-repeat;
    background-size: contain;
    background-position: center;
    border-bottom: 1px solid var(--home-foreground-oval-after);
  }
}

.people {
  @media screen and (min-width: 768px) {
    text-align: center;
    margin: 50px auto 0 auto;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 165px;
    margin-top: 120px;
  }
}

.people .des {
  width: 488px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 375px;
    text-align: center;
  }

}

.people .des #role {
  color: var(--home-foreground-hover);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 32px;
  }
}

.people .des #name {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 24px;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 40px;
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 56px;
    margin-top: 20px;
  }
}

.people .des p {
  width: 444px;
  line-height: 32px;
  color: var(--home-midground);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 100%;
    font-size: 15px;
    padding: 0 20px 0 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin: 10px auto;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    margin-top: 20px;
  }
}

/* 导航 */
.people {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    display: flex;
    flex-wrap: wrap;
  }
}

.people .bottomnav_mobile {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 375px;
    display: flex;
    justify-content: center;
    padding-left: 15px;
    padding-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
}

.people .bottomnav_nomobile {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
}

.people .bottomnav {
  @media screen and (min-width: 768px) {
    margin: 30px auto;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 165px;
    margin-top: 80px;
  }
}

.people .bottomnav li {
  @media screen and (min-width: 768px) {
    display: inline-block;
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }
}


.people .bottomnav a {
  float: left;
  display: block;
  margin-right: 24px;
  background-color: rgba(255, 255, 255, .17);
  border-radius: 50%;
  transition: all .6;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 10px;
    height: 10px;
    margin-right: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media screen and (min-width: 1440px) {
    width: 15px;
    height: 15px;
  }
}

.people .bottomnav .active {
  background-color: var(--home-foreground);
}

.people .bottomnav a:hover {
  background-color: var(--home-foreground-hover);
}

/* 人物图片 */
.peopleImg {
  background-size: 100%;

  @media screen and (min-width: 768px) {
    width: 550px;
    height: 550px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
    height: 650px;
    margin-left: 100px;
    margin-right: 50px;
    margin-top: 30px;
  }
}
</style>
