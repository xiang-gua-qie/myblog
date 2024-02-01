<template>
  <div class="svgs">
    <div class="welcome">
      <div>h i，<span class="icon_UFO ufo_fly" @click="goHomePage"></span></div>
      <div>欢迎来到我的网站</div>
    </div>
    <div class="ball">
      <svg
        class="sphere"
        :class="{ 'sphere-active': pointerActive }"
        viewBox="0 0 440 440"
        stroke="rgba(80,80,80,.35)"
      >
        <defs>
          <!-- path填充渐变色 -->
          <linearGradient id="linearColor" x1="25%" x2="25%" y1="0%" y2="75%">
            <stop stop-color="#373734" offset="0%"></stop>
            <stop stop-color="#242423" offset="50%"></stop>
            <stop stop-color="#0D0D0C" offset="100%"></stop>
          </linearGradient>
        </defs>

        <path
          d="M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z"
          stroke-dasharray="280.7113952636719"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
          id="topPathDom"
        ></path>
        <path
          d="M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z"
          stroke-dasharray="413.3923645019531"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z"
          stroke-dasharray="518.689697265625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"
          stroke-dasharray="612.8993530273438"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z"
          stroke-dasharray="688.08056640625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"
          stroke-dasharray="750.9237060546875"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z"
          stroke-dasharray="804.0537109375"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z"
          stroke-dasharray="843.49072265625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z"
          stroke-dasharray="873.8916015625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z"
          stroke-dasharray="890.8994140625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z"
          stroke-dasharray="895.5676879882812"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z"
          stroke-dasharray="890.8988037109375"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z"
          stroke-dasharray="873.893798828125"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z"
          stroke-dasharray="843.4929809570312"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z"
          stroke-dasharray="804.0543212890625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z"
          stroke-dasharray="750.9235229492188"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z"
          stroke-dasharray="688.0787353515625"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z"
          stroke-dasharray="612.899169921875"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z"
          stroke-dasharray="518.690673828125"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
        ></path>
        <path
          d="M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z"
          stroke-dasharray="413.3919372558594"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
          class="ssssss"
        ></path>
        <path
          d="M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"
          stroke-dasharray="280.7110900878906"
          style="stroke-dashoffset: 0px; stroke: rgba(80, 80, 80, 0.35)"
          @click="goHomePage"
          id="toppath"
        ></path>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTransitionStore } from "../../store/transitionHide";

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
.svgs {
  max-width: 110rem;
  min-width: 3.75rem;
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1r 1r;
  justify-items: center;
  align-items: center;
  gap: 10rem;
  .welcome {
    color: #fff;
    width: 100%;
    font-size: 3.6rem;
    letter-spacing: 0.2rem;
    margin-bottom: 5rem;
    margin-top: 20rem;
    z-index: 100;
    .icon_UFO {
      cursor: pointer;
      background: url("../../assets/images/home/飞船.svg") no-repeat;
      display: inline-block;
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      animation: ufoUpDown 2s linear infinite alternate;
    }
  }
  .ball {
    width: 58rem;
    height: 58rem;
    transform-origin: center 0;
    transform: scale(1.5);
  }
  .sphere {
    path:nth-child(22) {
      animation-delay: -2.2s;
      &:hover {
        cursor: pointer;
        animation: animateLight 5s linear infinite reverse;
        stroke-dasharray: 0.8rem 0.8rem;
        stroke-width: 0.2rem;
      }
    }

    path:nth-child(21) {
      animation-delay: -2s;
    }
    path:nth-child(20) {
      animation-delay: -1.8s;
    }
    path:nth-child(19) {
      animation-delay: -1.6s;
    }
    path:nth-child(18) {
      animation-delay: -1.4s;
    }
    path:nth-child(17) {
      animation-delay: -1.2s;
    }
    path:nth-child(16) {
      animation-delay: -1s;
    }
    path:nth-child(15) {
      animation-delay: -0.8s;
    }
    path:nth-child(14) {
      animation-delay: -0.6s;
    }
    path:nth-child(13) {
      animation-delay: -0.4s;
    }
    path:nth-child(12) {
      animation-delay: -0.2s;
    }
    path:nth-child(11) {
      animation-delay: 0s;
    }
    path:nth-child(10) {
      animation-delay: 0.2s;
    }
    path:nth-child(9) {
      animation-delay: 0.4s;
    }
    path:nth-child(8) {
      animation-delay: 0.6s;
    }
    path:nth-child(7) {
      animation-delay: 0.8s;
    }
    path:nth-child(6) {
      animation-delay: 1s;
    }
    path:nth-child(5) {
      animation-delay: 1.2s;
    }
    path:nth-child(4) {
      animation-delay: 1.4s;
    }
    path:nth-child(3) {
      animation-delay: 1.6s;
    }
    path:nth-child(2) {
      animation-delay: 1.8s;
    }
    path:nth-child(1) {
      animation-delay: 2s;
    }
    path:nth-child(0) {
      animation-delay: 2.2s;
    }

    path {
      fill: url("#linearColor");
      animation: animationbg 5s linear infinite;
    }
  }

  .sphere-active {
    path {
      animation: animationbg2 5s linear infinite;
    }
  }
}

// 全部path发光

// .sphere:first-child:hover > path {
//   cursor: pointer;
//   animation: animateLight 5s linear infinite reverse;
//   stroke-dasharray: 0.8rem 0.8rem;
//   stroke-width: 0.2rem;
// }

// hover后边框发光动画
@keyframes animateLight {
  0% {
    stroke: white;
    stroke-dashoffset: 0;
  }

  50% {
    stroke: white;
    stroke-dashoffset: 160;
  }

  100% {
    stroke: white;
    stroke-dashoffset: 320;
  }
}

// 球体边框波动动画1
@keyframes animationbg {
  0% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.9988px) translateY(-3.9988px);
  }
  5% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.99994px) translateY(-3.99994px);
  }
  10% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.98356px) translateY(-3.98356px);
  }
  15% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.85425px) translateY(-3.85425px);
  }
  20% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.45603px) translateY(-3.45603px);
  }
  25% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-2.67201px) translateY(-2.67201px);
  }
  30% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-1.51623px) translateY(-1.51623px);
  }
  35% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-0.170059px) translateY(-0.170059px);
  }
  40% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(1.05915px) translateY(1.05915px);
  }

  45% {
    stroke: rgba(56, 99, 168, 0.714);
    transform: translateX(1.84315px) translateY(1.84315px);
  }

  50% {
    stroke: rgba(39, 113, 232, 0.98);
    transform: translateX(1.95687px) translateY(1.95687px);
  }

  55% {
    stroke: rgba(39, 113, 232, 0.98);
    transform: translateX(1.36682px) translateY(1.36682px);
  }

  60% {
    stroke: rgba(39, 113, 232, 0.98);
    transform: translateX(0.244485px) translateY(0.244485px);
  }
  65% {
    stroke: rgba(56, 99, 168, 0.714);

    transform: translateX(-1.10155px) translateY(-1.10155px);
  }
  70% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-2.34408px) translateY(-2.34408px);
  }
  75% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-3.25413px) translateY(-3.25413px);
  }
  80% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.76551px) translateY(-3.76551px);
  }
  85% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.96212px) translateY(-3.96212px);
  }
  90% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.9991px) translateY(-3.9991px);
  }
  95% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.9999px) translateY(-3.9999px);
  }
  100% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.98108px) translateY(-3.98108px);
  }
}

// 球体边框波动动画2

@keyframes animationbg2 {
  0% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-0.39988px) translateY(-3.9988px);
  }
  5% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.99994px) translateY(-3.99994px);
  }
  10% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.98356px) translateY(-3.98356px);
  }
  15% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.85425px) translateY(-3.85425px);
  }
  20% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.45603px) translateY(-3.45603px);
  }
  25% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-2.67201px) translateY(-2.67201px);
  }
  30% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-1.51623px) translateY(-1.51623px);
  }
  35% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-0.170059px) translateY(-0.170059px);
  }
  40% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(1.05915px) translateY(1.05915px);
  }

  45% {
    stroke: rgba(56, 99, 168, 0.714);
    transform: translateX(1.84315px) translateY(1.84315px);
  }

  50% {
    stroke: rgba(39, 113, 232, 0.98);
    transform: translateX(1.95687px) translateY(1.95687px);
  }

  55% {
    stroke: rgba(39, 113, 232, 0.98);
    transform: translateX(1.36682px) translateY(1.36682px);
  }

  60% {
    stroke: rgba(39, 113, 232, 0.98);
    transform: translateX(0.244485px) translateY(0.244485px);
  }
  65% {
    stroke: rgba(56, 99, 168, 0.714);

    transform: translateX(-1.10155px) translateY(-1.10155px);
  }
  70% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-2.34408px) translateY(-2.34408px);
  }
  75% {
    stroke: rgba(67, 90, 128, 0.55);
    transform: translateX(-3.25413px) translateY(-3.25413px);
  }
  80% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.76551px) translateY(-3.76551px);
  }
  85% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.96212px) translateY(-3.96212px);
  }
  90% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.9991px) translateY(-3.9991px);
  }
  95% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.9999px) translateY(-3.9999px);
  }
  100% {
    stroke: rgba(80, 80, 80, 0.35);
    transform: translateX(-3.98108px) translateY(-3.98108px);
  }
}

@keyframes move {
  to {
    offset-distance: 100%;
  }
}

@keyframes ufoUpDown {
  0% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(-1rem);
  }
}
</style>
