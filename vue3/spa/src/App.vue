<template>
  <div id="app">
    <bar msg="home bar"></bar>
    <content msg="home content"></content>
    <footer-component msg="home footer"></footer-component>
  </div>
</template>

<script setup lang="ts">
import Bar from "./components/Bar.vue";
import FooterComponent from "./components/Footer.vue";
import Content from "./components/Content.vue";
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
