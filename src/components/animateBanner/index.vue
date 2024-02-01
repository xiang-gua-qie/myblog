<template>
  <div
    class="banner"
    @mouseenter="handelMouseEnter"
    @mousemove="handelMouseMove"
    @mouseleave="handelMouseLeave"
  >
    <div class="animated-banner">
      <div class="layer">
        <img
          src="@/assets/images/bgc01.webp"
          style="
            height: 250.839px;
            width: 2675.61px;
            transform: translate(0px, 0px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc02.webp"
          style="
            height: 245.265px;
            width: 1489.7px;
            transform: translate(0px, 0px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc03.webp"
          style="
            height: 200.903px;
            width: 1959.1px;
            transform: translate(0px, 0px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc04.webp"
          style="
            height: 185.806px;
            width: 2229.68px;
            transform: translate(0px, 11.6129px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc05.webp"
          style="
            height: 96.3871px;
            width: 2229.68px;
            transform: translate(0px, 63.871px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc06.webp"
          style="
            height: 128.903px;
            width: 2229.68px;
            transform: translate(0px, 46.4516px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc07.webp"
          style="
            height: 123.097px;
            width: 828px;
            transform: translate(-290.323px, -11.6129px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc08.webp"
          style="
            height: 54px;
            width: 61.5484px;
            transform: translate(348.387px, 29.0323px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc09.webp"
          style="
            height: 92.9032px;
            width: 301.935px;
            transform: translate(150.968px, 23.2258px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc10.webp"
          style="
            height: 70.8387px;
            width: 81.2903px;
            transform: translate(-371.613px, 23.2258px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc11.webp"
          style="
            height: 108.697px;
            width: 96.1548px;
            transform: translate(-209.032px, 20.9032px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc12.webp"
          style="
            height: 147.484px;
            width: 396px;
            transform: translate(87.0968px, 22.0645px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc13.webp"
          style="
            height: 136.568px;
            width: 967.123px;
            transform: translate(-836.129px, 55.7419px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc14.webp"
          style="
            height: 202.065px;
            width: 394.839px;
            transform: translate(-696.774px, -5.80645px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc15.webp"
          style="
            height: 209.032px;
            width: 527.226px;
            transform: translate(-987.097px, 0px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc16.webp"
          style="
            height: 85.9355px;
            width: 490.065px;
            transform: translate(-1393.55px, 63.871px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc17.webp"
          style="
            height: 137.032px;
            width: 248.516px;
            transform: translate(522.581px, 23.2258px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc18.webp"
          style="
            height: 87.0968px;
            width: 146.323px;
            transform: translate(406.452px, 58.0645px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc19.webp"
          style="
            height: 209.032px;
            width: 426.194px;
            transform: translate(812.903px, 0px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
      <div class="layer">
        <img
          src="@/assets/images/bgc20.webp"
          style="
            height: 85.9355px;
            width: 490.065px;
            transform: translate(1393.55px, 63.871px) rotate(0deg) scale(1);
            opacity: 1;
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
let banner, layers, imgs: any, TRANSLATE_REG: any, initTransforms: any;
let startX = 0;
onMounted(() => {
  banner = document.querySelector(".animated-banner") as HTMLElement;
  layers = banner.querySelectorAll(".layer");
  imgs = Array.prototype.map.call(layers, (layer) => layer.firstElementChild);
  TRANSLATE_REG = /(?<=translate\()[.\-\d]+/;
  initTransforms = imgs.map((img: any) => {
    const transformStr = img.style.transform;
    const matched = transformStr.match(TRANSLATE_REG);
    const translateY = matched ? parseFloat(matched[0]) : 0;
    return [transformStr, translateY];
  });
});
const layerIndex = ref(0);
const handelMouseEnter = (e: any) => {
  startX = e.offsetX;
};

var diffX: any, diffW: any, sceneryMoveX: any;
const handelMouseMove = (e: any) => {
  if (!startX) return;
  diffX = e.offsetX - startX;
  animateDiffX(diffX);
  sceneryMoveX = -layerIndex.value * e.clientX * 0.1;
};
const handelMouseLeave = () => {
  startX = 0;
  animateDiffX(0, 200);
};

let dom: any = null;
function animateDiffX(n: any, interval?: any) {
  if (dom) {
    window.cancelAnimationFrame(dom);
    dom = null;
  }
  if (!interval) {
    dom = window.requestAnimationFrame(() => {
      transformImgs(n);
      diffW = n;
    });
  }
  const startTime = Date.now();
  dom = window.requestAnimationFrame(() => {
    const currTime = Date.now();
    const ratio = Math.min((currTime - startTime) / interval, 1);
    const to = diffW + (n - diffW) * ratio;
    transformImgs(to);
    diffW = to;
    animateDiffX(n, interval * (1 - ratio));
  });
}
function transformImgs(n: any) {
  imgs.forEach((img: any, index: any) => {
    const [str, v] = initTransforms[index];
    const transform = str.replace(TRANSLATE_REG, v - (index + 1) * n * 0.009);
    img.style.transform = transform;
  });
}
</script>
<style scoped lang="less">
.banner {
  position: relative;
  z-index: 0;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 1000px;
  width: 100%;
  min-height: 155px;
  height: 9.375vw;
  max-height: 240px;
  background-color: #80b9f2;
  background-position: center 0;
  background-size: cover;
  background-repeat: no-repeat;
}
.animated-banner {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .layer {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
