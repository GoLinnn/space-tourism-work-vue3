<script>
import axios from 'axios'
export default {
  data() {
    return {
      data: [],
      currentImage: '../assets/destination/image-moon.png',
      id: 0
    }
  },
  async created() {
    await axios.get('db.json').then((res) => {
      this.data = res.data.destinations;
    })
  },
  updated() {
    return console.log(this.data[this.id].images.png)
  },
  // methods {
  //   changeImage() {
  //     this.currentImage = 
  //   }
  // }
}
</script>

<template>
  <h3 class="font2"><span>01</span>PICK YOUR DESTINATION</h3>
  <div class="star">
    <div class="sphere" :style="{ background: `url( ${data[id]?.images.png} )` }">
    </div>
    <div class="describe">
      <ul class="rightnav font2">
        <li><a href="#" :class="{ active: id === 0 }" @click="id = 0">MOON</a></li>
        <li><a href="#" :class="{ active: id === 1 }" @click="id = 1">MARS</a></li>
        <li><a href="#" :class="{ active: id === 2 }" @click="id = 2">EUROPA</a></li>
        <li><a href="#" :class="{ active: id === 3 }" @click="id = 3">TITAN</a></li>
      </ul>
      <div class="detail">
        <h2 class="font1">{{ data[id]?.name }}</h2>
        <p class="font3 description">{{ data[id]?.description }}</p>
        <div class="detail_line"></div>
        <div class="detail_travel">
          <div class="detail_box">
            <p class="font2 text">Avg. distance</p>
            <p class="font1 distance">{{ data[id]?.distance }}</p>
          </div>
          <div class="detail_box">
            <p class="font2 text">Est. travel time</p>
            <p class="font1 travel">{{ data[id]?.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@media screen and (min-width: 375px) and (max-width: 767px) {
  body {
    background: url('../assets/destination/background-destination-mobile.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 768px) {
  body {
    background: url('../assets/destination/background-destination-tablet.jpg') no-repeat;
    background-size: cover;
  }
}

@media screen and (min-width: 1440px) {
  body {
    background: url('../assets/destination/background-destination-desktop.jpg') no-repeat;
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

.star {
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    margin: 40px auto;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
    margin-left: 230px;
  }
}

.star .sphere {
  /* background: url('../assets/destination/image-moon.png'); */
  background-size: cover;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 170px;
    height: 170px;
    margin: 30px auto;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 300px;
    margin: 30px auto;
  }

  @media screen and (min-width: 1440px) {
    width: 445px;
    height: 445px;
    margin: 30px 0 0 0;
  }
}

.star .describe {
  margin-left: 150px;
  width: 445px;
  height: 472px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    text-align: center;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
  }

  @media screen and (min-width: 1440px) {
    text-align: left;
  }
}

.star .describe .rightnav {
  display: flex;
  width: 325px;
  height: 34px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 100%;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    margin: 0;
  }
}


.star .describe .rightnav a {
  display: inline-block;
  height: 100%;
  margin: 0 17px 0 17px;
  color: var(--home-midground);
  font-size: 16px;
  letter-spacing: 2.7px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 14px;
    letter-spacing: 2.36px;
  }
}

.star .describe .rightnav .active {
  border-bottom: 3px solid var(--home-foreground);
}

.star .describe .rightnav a:hover {
  border-bottom: 3px solid var(--home-foreground-hover);
}

.detail {
  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 375px;
  }
}

.detail h2 {
  margin-top: 50px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 56px;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 80px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
  }
}

.detail p {
  line-height: 32px;
  margin-top: 5px;
  color: var(--home-midground);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    font-size: 15px;
    margin: 0 20px 0 20px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
}

.detail .detail_line {
  width: 444px;
  height: 1px;
  margin-top: 40px;
  background-color: var(--detination-line);

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 327px;
    margin: auto;
    margin-top: 10px;
  }
}

.detail .detail_travel {
  display: flex;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    flex-wrap: wrap;
  }

}

.detail .detail_travel .detail_box {
  width: 150px;
  height: 61px;
  margin: 0 40px 0 40px;

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 327px;
    margin: 10px auto;
    text-align: center;
  }
}


.detail .detail_travel .detail_box .text {
  font-size: 14px;
  letter-spacing: 2.36px;
}

.detail .detail_travel .detail_box .distance,
.detail .detail_travel .detail_box .travel {
  font-size: 28px;
}
</style>