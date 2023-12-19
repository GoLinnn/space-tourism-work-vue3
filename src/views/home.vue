<script>
export default {
  mounted() {
    document.body.setAttribute("class", "homeBody")
  },
  beforeDestroy() {
    document.body.removeAttribute("class", "homeBody")
  }
}
</script>

<template>
  <div class="main">
    <div class="main_text">
      <h2 class="font2">SO, YOU WANT TO TRAVEL TO</h2>
      <h1 class="font1">SPACE</h1>
      <p class="font3">Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!</p>
    </div>
    <div class="explore">
      <RouterLink to="/destination" class="font1">EXPLORE</RouterLink>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 375px) and (max-width: 767px) {
  .homeBody {
    background: url('@/assets/home/background-home-mobile.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 768px) {
  .homeBody {
    background: url('@/assets/home/background-home-tablet.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 1040px) {
  .homeBody {
    background: url('@/assets/home/background-home-desktop.jpg') no-repeat;
    background-size: cover;
  }
}

/* 标题文字 */
.main {
  display: flex;
  flex-wrap: wrap;
}

.main .main_text {
  width: 450px;
  height: 382px;
  margin-left: 165px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    height: 300px;
    margin: 80px 40px 20px 40px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }

  @media screen and (min-width: 1040px) {
    margin-top: 200px;
  }
}

.main .main_text h2 {
  letter-spacing: 4.72px;
  margin-bottom: 15px;
  color: var(--home-midground);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 16px;
    letter-spacing: 2.7px
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1040px) {
    font-size: 28px;
  }
}

.main .main_text h1 {
  font-size: 150px;
  margin-bottom: 15px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 80px;
  }
}

.main .main_text p {
  line-height: 32px;
  color: var(--home-midground);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 15px;
    line-height: 25px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1040px) {
    font-size: 18px;
  }
}

/* 探索按钮 */
.main .explore {
  width: 274px;
  height: 274px;
  background-color: var(--home-foreground);
  border-radius: 50%;
  text-align: center;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 150px;
    height: 150px;
    /* 居中 */
    margin: auto;
    margin-bottom: 30px
  }

  @media screen and (min-width: 768px) {
    /* 居中 */
    margin: 80px auto;
  }

  @media screen and (min-width: 1040px) {
    margin: 250px 0 0 200px;
    /* 设置过渡效果 */
    transition: all 0.6s;
  }
}

.main .explore:hover {
  @media screen and (min-width: 1040px) {
    /* 使用box-shadow来创建外部光晕 */
    box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1);
    /* 这里的rgba中的最后一个参数控制透明度 */
    background-clip: padding-box;
    /* 设置鼠标 */
    cursor: pointer;
  }

}

.main .explore a {
  display: block;
  color: var(--home-background);
  font-size: 32px;
  letter-spacing: 2px;
  margin-top: 118px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 20px;
    letter-spacing: 1.25px;
    margin-top: 69px;
  }
}
</style>
