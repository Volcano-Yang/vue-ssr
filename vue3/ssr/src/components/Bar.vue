<template>
  <div class="bar">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<style scoped>
.bar {
  width: 500px;
  height: 100px;
  margin: 50px 0;
  background-color: red;
}
</style>
