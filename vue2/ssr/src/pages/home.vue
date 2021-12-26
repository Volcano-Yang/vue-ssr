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
  name: "HomePage",
  data() {
    return {
      msg: "home page",
    };
  },
  components:{
      Bar,
      FooterComponet
  }
};
</script>