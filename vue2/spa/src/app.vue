<template>
  <div id="app">
    <nav>
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      <router-link to="/"> 首页 </router-link>
      <!-- eslint-disable-next-line vue/singleline-html-element-content-newline -->
      <router-link to="/topic"> 话题页 </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
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
