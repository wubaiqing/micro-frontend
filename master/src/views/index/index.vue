<template>
  <div id="xy-micro-frontend">
  </div>
</template>

<script>
import { mapState } from 'vuex';
/**
 * 首页路由
 * @route('index', '')
 * @route('slave/*', '')
 */
export default {
  name: 'index',
  computed: mapState({
    mic(state) {
      return state.menu.mic;
    },
  }),
};
</script>
