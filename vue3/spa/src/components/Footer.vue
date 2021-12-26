<template>
  <div class="footer">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<style scoped>
.footer {
  width: 500px;
  height: 100px;
  margin: 50px 0;
  background-color: green;
}
</style>
