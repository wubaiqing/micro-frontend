import postMsg from '@/utils/iframe';

export default {
  mounted() {
    this.$nextTick(postMsg);
  },
};
