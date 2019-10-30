<template>
  <div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
  </div>
</template>

<script>
/**
 * 首页路由
 * @route('slave/index', '')
 * @route('slave/test', '')
 */
export default {
  name: 'index',
  data() {
    return {
      input: '',
    };
  },
};
</script>
