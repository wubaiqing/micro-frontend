<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
/*给 message 使用，保证它在最上层*/
.__on-top {
  z-index: 99999 !important;
}
</style>
