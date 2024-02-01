<template>
  <div class="appContent">
    <el-scrollbar
      wrap-class="app_scroll"
      ref="scrollbarRef"
      @scroll="scroll"
      :class="{ animate_Transition: transitionStore.isStart }"
    >
      <div class="contentBox">
        <router-view />
      </div>
      <el-backtop
        :right="50"
        :bottom="100"
        target=".appContent .el-scrollbar__wrap"
      />
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { useTransitionStore } from "./store/transitionHide";
import { ref, provide } from "vue";
const transitionStore = useTransitionStore();

const scrollbarRef = ref();
const scrollDistanc = ref(0);
const scrollToEvent = (obj: { behavior?: string; top: number }) => {
  return scrollbarRef.value!.scrollTo(obj);
};
const scroll = ({ scrollTop }: any) => {
  scrollDistanc.value = scrollTop;
};

const getScrollDistanc = (): number => {
  return scrollDistanc.value;
};

provide("scrollToEvent", scrollToEvent);

provide("getScrollDistanc", getScrollDistanc);

const isHide = ref(false);
</script>

<style scoped lang="less">
.appContent {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  :deep(.app_scroll) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    .el-scrollbar__view {
      height: 100%;
    }
    .contentBox {
      height: 100%;
    }
  }
}

.animate_Transition {
  animation: animate 3s linear;
}

//   -----   转场 动画  -------
@-moz-keyframes animate {
  10% {
    transform: scale(1, 0.002);
  }
  35% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  50% {
    transform: scale(0.2, 0.002);
    opacity: 0;
  }
  85% {
    transform: scale(1, 0.002);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
  }
}

@-webkit-keyframes animate {
  10% {
    transform: scale(1, 0.002);
  }
  35% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  50% {
    transform: scale(0.2, 0.002);
    opacity: 0;
  }
  85% {
    transform: scale(1, 0.002);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
  }
}
@-o-keyframes animate {
  10% {
    transform: scale(1, 0.002);
  }
  35% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  50% {
    transform: scale(0.2, 0.002);
    opacity: 0;
  }
  85% {
    transform: scale(1, 0.002);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
  }
}
@keyframes animate {
  10% {
    transform: scale(1, 0.002);
  }
  35% {
    transform: scale(0.2, 0.002);
    opacity: 1;
  }
  50% {
    transform: scale(0.2, 0.002);
    opacity: 0;
  }
  85% {
    transform: scale(1, 0.002);
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
