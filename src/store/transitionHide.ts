import { defineStore } from "pinia";

export const useTransitionStore = defineStore("transitionHide", {
  state() {
    return {
      // 是否显示过渡动画
      isStart: false,
    };
  },

  actions: {
    // 设置是否显示过渡动画
    startTrantsition(callback?: Function) {
      this.isStart = true;
      setTimeout(() => {
        callback && callback();
      }, 1500); // 假设过渡动画持续1.5秒，根据实际情况调整

      setTimeout(() => {
        this.isStart = false;
      }, 3000); // 假设过渡动画持续3秒，根据实际情况调整
    },
  },
});
