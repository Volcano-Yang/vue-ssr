<template>
    <!-- <button class="count" type="button" @click="addCount">count is: {{ asyncData.count }}</button> -->
    <button class="count" type="button" @click="addCount">count is: {{ count }}</button>

</template>

<script setup lang="ts">
// 使用了vuex版的

// import { ref, onMounted, onUpdated, computed } from 'vue'

// import { useStore } from 'vuex'

// const store = useStore();

// console.log("store.state.count", store.state.count) // -> 1

// const count = computed(()=>{
//   return store.state.count;
// });

// const addCount = () => {
//   store.commit('increment')
// }

// onUpdated(() => {
//   console.log("onUpdated count", count.value);
// })

// 不使用vuex版的
import { ref, onUpdated } from 'vue'

const count = ref(0);

const addCount = () => {
  count.value++;
}

onUpdated(() => {
  console.log("onUpdated count", count.value);
})


// 初始化window.__ASYNCDATA__

// import { reactive, onUpdated } from 'vue'

// window.__ASYNCDATA__ = {
//   count: 1,
//   asyncData: true
// }



// const asyncData = reactive(window.__ASYNCDATA__);

// const addCount = () => {
//   asyncData.count ++;
// }

// onUpdated(() => {
//   console.log("onUpdated count", asyncData.count);
// })

</script>

<style>

.count{
  margin: 1rem;
}

</style>