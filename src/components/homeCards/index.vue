<template>
  <div class="homeCards">
    <div v-slide-animation class="card" v-for="item in 100" :key="item"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="less">
.homeCards {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
}
.card {
  width: 40rem;
  height: 30rem;
  background-color: pink;
}
</style>
