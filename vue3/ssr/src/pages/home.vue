<template>
  <Bar msg="home bar"></Bar>
  <content msg="home contents"></content>
  <div>{{ catImageUrl }}</div>
  <button class="count" type="button" @click="()=>{ test++; }">
    Test is: {{ test }}
  </button>
  <suspense>
    <template #default>
      <Cat></Cat>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </suspense>
  <FooterComponent msg="home footer"></FooterComponent>
</template>

<script lang="ts">
import Bar from "../components/Bar.vue";
import FooterComponent from "../components/Footer.vue";
import Content from "../components/Content.vue";
import Cat from "../components/Cat.vue";
import Count from "../components/Count.vue";
import { defineComponent, ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";

import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    Bar,
    FooterComponent,
    Content,
    Cat,
    Count,
  },

  setup() {
    const store = useStore();

    console.log("store.state", store.state);

    const asyncDataRective = reactive(store.state);

    console.log("asyncDataRective ", asyncDataRective);

    console.log("asyncDataRective toRefs", toRefs(asyncDataRective));

    const setupResult = ref("test");

    return { ...toRefs(asyncDataRective), setupResult };
  },

  async asyncData() {
    const getCatImagesResult = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );

    const catImageUrl = getCatImagesResult?.data?.message ?? "";

    return {
      catImageUrl,
      test: 2,
    };
  },
});
</script>

<!-- <script setup lang="ts">
import Bar from '../components/Bar.vue'
import FooterComponent from '../components/Footer.vue'
import Content from '../components/Content.vue'
import Cat from '../components/Cat.vue'
import Count from '../components/Count.vue'

</script> -->

<style>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}
</style>
