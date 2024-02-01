import { ref, watchEffect } from "vue";

// 定义一个Theme类型，可以是"LIGHT"、"dark"或"SYSTEM"
type Theme = "LIGHT" | "dark" | "SYSTEM";

// 定义一个LOCAL_THEME常量，用于存储主题信息
const LOCAL_THEME = "__theme__";

// 定义一个theme变量，用于存储主题信息，初始值为从本地存储中获取的theme，如果没有则默认为dark
const theme = ref<Theme>(
  (localStorage.getItem(LOCAL_THEME) as Theme) || "dark"
);

// 定义一个systemTheme变量，用于存储系统主题信息，初始值为根据系统主题信息获取的theme
const systemTheme = matchMedia("(prefers-color-scheme: dark)");

// 定义一个FollowSystemTheme函数，用于跟随系统主题信息
const FollowSystemTheme = () => {
  // 将系统主题信息存储到document.documentElement.dataset.theme中
  document.documentElement.dataset.theme = systemTheme.matches
    ? "DARK"
    : "LIGHT";
};

// 监听theme的改变，当theme改变时，将theme的值存入localStorage，
// 并且根据theme的值来决定是否FollowSystemTheme
watchEffect(() => {
  localStorage.setItem(LOCAL_THEME, theme.value);

  if (theme.value === "SYSTEM") {
    FollowSystemTheme();
    systemTheme.addEventListener("change", FollowSystemTheme);
  } else {
    document.documentElement.dataset.theme = theme.value;
    systemTheme.removeEventListener("change", FollowSystemTheme);
  }
});

export default function useTheme() {
  return theme;
}
