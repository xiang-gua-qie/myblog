// 雨滴
export const Raindrop = {
  background: {
    color: {
      value: "",
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "grab",
        parallax: { enable: false, force: 60, smooth: 10 },
      },
    },
    modes: {
      push: { particles_nb: 3 },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    move: {
      direction: "bottom",
      enable: true,
      random: false,
      speed: 10,
      straight: true,
    },
    number: {
      density: {
        enable: true,
        area: 0,
      },
      value: 500,
    },
    opacity: {
      random: true,
      anim: {
        enable: true,
      },
      value: {
        min: 0.5,
        max: 1,
      },
    },
    shape: {
      type: "triangle",
      stroke: { width: 0, color: "#fff" },
      polygon: { nb_sides: 3 },
    },
    size: {
      value: 2,
      random: true,
    },
  },
  retina_detect: true,
};

export const Snows = {
  background: {
    color: {
      value: "",
    },
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse", // 是否可以被鼠标悬浮附近后有碰触效果
        parallax: { enable: false, force: 60, smooth: 10 },
      },
    },
    modes: {
      push: { quantity: 4 },
      repulse: { distance: 50, duration: 0.4 }, // 鼠标和元素的距离,和持续时间
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 800,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 0.05,
        sync: true,
        count: 1,
      },
      value: {
        min: 0,
        max: 0.5,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 4 },
    },
  },
};
