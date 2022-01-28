<template>
  <div>
    <bar></bar>
    <div>
      {{ msg }}

      <button @click="increment">{{ count }}</button>
    </div>
    <footer-componet></footer-componet>
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";
import FooterComponet from "../components/Footer.vue";

export default {
  name: "HomePage",
  components: {
    Bar,
    FooterComponet,
  },
  data() {
    return {
      msg: "home page",
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log("this.$store.state.count", this.$store.state.count);
    },
  },
};
</script>