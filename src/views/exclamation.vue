<template>
  <div id="sphereBall">
    <div class="exclamation">
      <div class="exclamation__point" @click="goHomePage">wind</div>
      <div class="tools">
        <div class="changeSys">切换主题</div>
        <div class="changeLangun">中/英</div>
      </div>
    </div>
    <ball></ball>
  </div>
</template>
<script setup lang="ts">
import ball from "@/components/ball/index.vue";
import { ref, onUnmounted, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTransitionStore } from "../store/transitionHide";

const transitionStore = useTransitionStore();

const router = useRouter();
let timer: any;

onMounted(() => {});

onUnmounted(() => {
  clearTimeout(timer);
});
const pointerActive = ref(false);
const goHomePage = () => {
  if (pointerActive.value) {
    return;
  }
  pointerActive.value = true;
  transitionStore.startTrantsition(() => {
    pointerActive.value = false;
    router.push("/home");
  });
};
</script>
<style scoped lang="scss">
#sphereBall {
  position: absolute;
  box-sizing: border-box;
  background-color: #16191e;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  .exclamation {
    position: fixed;
    top: 0;
    width: 100%;
    height: 6.4rem;
    padding: 0 2rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    z-index: 99;
    .exclamation__point {
      height: 100%;
      line-height: 6.4rem;
      font-size: 3.6rem;
      letter-spacing: 0.4rem;
      font-weight: 700;
      cursor: pointer;
    }
    .tools {
      cursor: pointer;
      font-size: 1.4rem;
      width: 20rem;
      height: 100%;
      line-height: 6.4rem;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
}
</style>
