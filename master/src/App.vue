<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: { content: String },
  mounted() {
    // this.$route.meta = this.content;
    // console.log(this.$route.meta);
    // this.$route.meta = {
    //   content: this.content,
    // };
  },
  watch: {
    content(value) {
      this.$store.commit('ADD_MIC', value);
    },
  },
};
</script>

<style lang="scss">
/*给 message 使用，保证它在最上层*/
.__on-top {
  z-index: 99999 !important;
}
</style>
