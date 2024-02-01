<template>
  <div class="paryicles">
    <!-- <vue-particles
      id="tsparticles"
      :particlesLoaded="particlesLoaded"
      :options="Snows"
    /> -->
  </div>
</template>
<script setup lang="ts">
import { Snows } from "../../common/paryicles/modes";
const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};
</script>
<style scoped lang="less"></style>
