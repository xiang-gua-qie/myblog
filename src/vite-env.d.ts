/// <reference types="vite/client" />

// vue 文件的类型声明
declare module "*.vue" {
  import { ComponentOptions } from "vue";

  const componentOptions: ComponentOptions;

  export default componentOptions;
}

interface Window {
  service: any;
}
