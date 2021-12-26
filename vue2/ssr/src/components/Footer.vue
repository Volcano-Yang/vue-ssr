<template>
  <div class="footer">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: "FooterComponet",
  data() {
    return {
      msg: "footer",
    };
  },
};
</script>

<style scoped>
.footer {
  width: 500px;
  height: 100px;
  margin: 50px 0;
  background-color: green;
}
</style>