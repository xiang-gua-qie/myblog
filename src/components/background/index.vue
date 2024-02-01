<template>
  <div class="videos">
    <!-- <video
      class="videoModel"
      :autoplay="true"
      :loop="true"
      muted
      :volume="0.5"
      width="100%"
      preload="auto "
      src="@/assets/videos/塞尔达.mp4"
    ></video> -->
    <img class="imagebgc" src="@/assets/images/home/xueshan.jpg" alt="" />
  </div>
</template>
<script setup lang="ts">
// const openSound = () => {
//   var video = document.querySelector("video") as HTMLVideoElement;
//   video.muted = false;
// };
</script>
<style scoped lang="less">
.videos {
  width: 100vw;
  height: 60vh;
  position: fixed;
  z-index: -1;
  .videoModel,
  .imagebgc {
    object-fit: cover;
    width: 100%;
    height: 100%;
    animation: annimationImage 14s ease-in-out;
  }

  @keyframes annimationImage {
    0% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }
}
</style>
