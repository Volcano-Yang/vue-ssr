<template>
    <button class="count" type="button" @click="addCount">count is: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'

const count = ref(0);

const addCount = () => {
  count.value++;
}

onUpdated(() => {
  console.log("onUpdated count", count.value);
})
</script>

<style>

.count{
  margin: 1rem;
}

</style>