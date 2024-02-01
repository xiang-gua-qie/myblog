import { createApp } from "vue";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";
import { createPinia } from "pinia";
import { AdaptiveAdaptation } from "./utils";
// import { loadSlim } from "@tsparticles/slim";
import "@/assets/fonts/index.css"; // 字体
import "@/assets/style/index.css";
import App from "./App.vue";
import router from "./router/index";
import service from "./service/index";
import directives from "./directives";

const pinia = createPinia();
window.service = service;
AdaptiveAdaptation();
const app = createApp(App);

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});
app.use(pinia);
app.use(router);
app.use(Particles, {
  init: async (engine) => {
    await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
    // await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
  },
});

app.mount("#app");
