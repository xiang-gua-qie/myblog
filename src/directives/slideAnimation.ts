const DISTANCE = 150; // 距离
const DURATION = 600; // 延迟

const map = new WeakMap(); // 创建一个WeakMap对象

// 创建一个新的IntersectionObserver实例，用于检测元素是否 intersecting
const ob = new IntersectionObserver((entries) => {
  // 遍历entries，检查每一个entry
  for (const entry of entries) {
    // 如果entry intersecting，则获取map中对应的animation，并播放
    if (entry.isIntersecting) {
      const animation = map.get(entry.target);
      if (animation) {
        animation.play();
        // 停止观察该元素
        ob.unobserve(entry.target);
      }
    }
  }
});

// 元素是否在可视区域的下方
const isBelowViewport = (el: any) => {
  const rect = el.getBoundingClientRect();
  return rect.top - DISTANCE > window.innerHeight;
};

export default {
  name: "slide-animation",
  mounted(el: any) {
    // 如果元素不是在可视区域下方，则直接返回
    if (!isBelowViewport(el)) {
      return;
    }
    // 创建动画，并暂停
    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}px)`,
          opacity: 0.5,
        },
        {
          transform: `translateY(0px)`,
          opacity: 1,
        },
      ],
      {
        duration: DURATION,
        easing: "ease-in-out",
        fill: "forwards",
      }
    );
    animation.pause(); // 动画暂停
    ob.observe(el); // 开始监听
    map.set(el, animation); // 将动画添加到WeakMap中
  },
  unmounted(el: any) {
    ob.unobserve(el); // 停止监听
  },
};
