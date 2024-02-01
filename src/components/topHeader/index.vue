<template>
  <Transition name="header">
    <div
      class="topHeader"
      :class="{ bgcWhite: isbgcWhite }"
      v-show="isShowHeader"
    >
      <div class="left">wind</div>
      <div class="right">
        <div class="tab articleTab">
          <img
            class="icon_article"
            src="../../assets/images/icons/5记录.svg"
            alt=""
          />
          文章
        </div>
        <div class="tab messageTab">
          <img
            class="icon_message"
            src="../../assets/images/icons/21信息.svg"
            alt=""
          />
          留言
        </div>
        <div class="tab collectionTab">
          <img
            class="icon_collection"
            src="../../assets/images/icons/11收藏.svg"
            alt=""
          />
          个人收藏
        </div>
        <div class="tab callTab">
          <img
            class="icon_call"
            src="../../assets/images/icons/8电话 (1).svg"
            alt=""
          />
          联系我
        </div>
        <div class="tab authorTab">
          <img
            class="icon_author"
            src="../../assets/images/icons/辞岁女孩.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </Transition>

  <div v-show="!isShowHeader" class="topHeader"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, inject, watch, computed } from "vue";
type distanc = () => number;
const getScrollDistanc: distanc = inject("getScrollDistanc") as distanc;

const scrollDistanc = computed(() => getScrollDistanc());

onMounted(() => {});

const isShowHeader = ref(true);
const isbgcWhite = ref(false);
watch(
  () => scrollDistanc.value,
  (newValue, oldValue) => {
    if (newValue > 50 && oldValue < newValue) {
      isShowHeader.value = false;
    } else if (oldValue > newValue) {
      isShowHeader.value = true;
    }
    isbgcWhite.value = newValue > 750;
  },
  {
    deep: true,
  }
);
</script>
<style scoped lang="less">
.header-enter-active,
.header-leave-active {
  transition: all 0.5s ease-in-out;
}

.header-enter-from,
.header-leave-to {
  height: 0;
  opacity: 0;
}

.topHeader {
  position: fixed;
  top: 0;
  height: 6.4rem;
  box-sizing: border-box;
  width: 100%;
  padding: 0 2rem 0 2rem;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  z-index: 100;

  &:hover {
  }
  z-index: 999;
  .left {
    font-size: 2.4rem;
    height: 100%;
    line-height: 6.4rem;
    font-weight: 700;
    letter-spacing: 0.4rem;
    cursor: pointer;
  }
  .right {
    font-size: 1.4rem;
    display: flex;
    width: 50rem;
    justify-content: space-between;
    .tab {
      cursor: pointer;
      line-height: 6.4rem;
    }
    img {
      display: inline-block;
      width: 3rem;
      height: 3rem;
      vertical-align: middle;
      &:hover {
        transform: scale(1.5);
        transition: all 0.5s ease-in-out;
      }
    }
    .icon_author {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      &:hover {
        transform: scale(1.5);
        transition: all 0.1s ease-in-out;
      }
    }
  }
}
.bgcWhite {
  background-color: #fff;
  color: black !important;
  box-shadow: 0.1 3px 1px #fdfdfd;
}
</style>
