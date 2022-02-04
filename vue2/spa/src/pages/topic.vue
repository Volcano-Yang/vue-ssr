<template>
  <div>
    <bar />
    <div>
      {{ msg }}
    </div>
    <footer-componet />
  </div>
</template>

<script>
import Bar from "../components/Bar.vue";
import FooterComponet from "../components/Footer.vue";

export default {
  name: "TopicPage",
  components: {
    Bar,
    FooterComponet,
  },
  data() {
    return {
      msg: "topic page",
    };
  },
};
</script>
