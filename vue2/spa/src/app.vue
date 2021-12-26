<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/topic">话题页</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
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
