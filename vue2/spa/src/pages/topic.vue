<template>
  <div>
    <bar></bar>
    <div>
        {{ msg }}
    </div>
    <footer-componet></footer-componet>
  </div>
</template>

<script>
import Bar from '../components/Bar.vue'
import FooterComponet from '../components/Footer.vue'


export default {
  name: "TopicPage",
  data() {
    return {
      msg: "topic page",
    };
  },
  components:{
      Bar,
      FooterComponet
  }
};
</script>