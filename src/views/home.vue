<template>
  <div class="home">
    <topHeader></topHeader>
    <paryicles></paryicles>
    <background></background>
    <div class="topLayer">
      <div class="bottombg1"></div>
      <div class="bottombg2"></div>
      <el-icon class="boat" @click="navigation">
        <span class="UFO_down"></span>
      </el-icon>
    </div>
    <div class="middleLayer">
      <homeCards />
    </div>
    <div class="contentLayer"></div>
  </div>
</template>
<script setup lang="ts">
import topHeader from "@/components/topHeader/index.vue";
import paryicles from "@/components/paryicles/index.vue";
import background from "@/components/background/index.vue";
import homeCards from "@/components/homeCards/index.vue";
import { ArrowDownBold } from "@element-plus/icons-vue";
import { onMounted, inject } from "vue";
let scrollToEvent: any;
scrollToEvent = inject("scrollToEvent");

onMounted(() => {
  getWeather();
});

const navigation = () => {
  let middleLayerDom = document.querySelector(".middleLayer") as HTMLElement;

  scrollToEvent({
    top: middleLayerDom.offsetTop,
    behavior: "smooth",
  });
};

// 获取当地天气
const getWeather = async () => {
  // const city: any = await window.service("getCitycode", {
  //   params: {
  //     key: "1b541d167e5bce4bbc9dbd2236d350d9",
  //   },
  // });
  // const weather: any = await window.service("getWeather", {
  //   params: {
  //     key: "1b541d167e5bce4bbc9dbd2236d350d9",
  //     city: city.adcode,
  //     extensions: "base",
  //     output: "JSON",
  //   },
  // });
  // console.log(weather);
};
</script>
<style scoped lang="less">
.home {
  .topLayer {
    height: 61vh;
    position: relative;
    display: flex;
    flex-direction: column;
    user-select: none;
    overflow: hidden;
    .bottombg1 {
      height: 8.4rem;
      position: absolute;
      width: 200%;
      bottom: 0;
      z-index: 10;
      background: url("../assets/images/home/bottombg1.png") repeat-x;
      animation: animationbg 120s linear infinite;
    }
    .bottombg2 {
      height: 10rem;
      position: absolute;
      width: 400%;
      bottom: 0;
      z-index: 5;
      background: url("../assets/images/home/bottombg2.png") repeat-x;
      animation: animationbg 120s linear infinite;
    }
    .boat {
      width: 6rem;
      height: 6rem;
      bottom: 5rem;
      left: 20%;
      position: absolute;
      z-index: 15;
      animation: arrow_down 30s linear infinite alternate;
      &:hover {
        animation-play-state: paused;
      }
    }
    .UFO_down {
      width: 6rem;
      height: 6rem;
      display: inline-block;
      background: url("../assets/images/home/UFO.svg") no-repeat;
      background-size: 6rem 6rem;
      animation: arrow_down_ 6s ease-in-out infinite;
      cursor: pointer;
    }
  }
  .middleLayer {
    min-height: 200rem;
    background-color: #fff;
  }
}

/* 背景位置移动 */
@keyframes animationbg {
  0% {
    background-position: 0 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0 50%;
  }
}
/* 下移 */
@keyframes arrow_down {
  0% {
    opacity: 1;
    transform: translateY(0px) translateX(0px);
    left: 20%;
  }

  30% {
    opacity: 0.5;
    transform: translateY(2.5rem);
    left: 50%;
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
    left: 80%;
  }
}
@keyframes arrow_down_ {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }

  30% {
    opacity: 0.5;
    transform: translateY(2.5rem);
  }

  100% {
    opacity: 1;
    transform: translateY(2.5rem);
  }
}
</style>
