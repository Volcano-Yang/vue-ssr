<template>
  <div>
    <bar />
    <div>
      {{ msg }}

      <button @click="increment">
        {{ count }}
      </button>
    </div>
    <footer-componet />
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
  created() {
    const isNode =
      typeof globalThis.process !== "undefined" &&
      globalThis.process.versions !== null &&
      globalThis.process.versions.node !== undefined;

    if (!isNode && window.__INITIAL_STATE__) {
      console.log("重置store");
      this.$store.replaceState(window.__INITIAL_STATE__);
    }
  },
  mounted() {
    console.log("this.$store.state", this.$store.state);
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log("this.$store.state.count", this.$store.state.count);
    },
  },
};
</script>
