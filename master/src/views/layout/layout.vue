<template>
  <el-container>
    <el-header v-if="!isSimpleLayout">
      <header-grid></header-grid>
    </el-header>
    <el-container>
      <el-aside width="240" v-if="!isSimpleLayout">
        <menuBar></menuBar>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer v-if="!isSimpleLayout">
          <footer-grid></footer-grid>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { setToken } from '@xiyun/utils';
// import menu from '../../config/menu';

import menuBar from './menu.vue';
import headerGrid from './header.vue';
import footerGrid from './footer.vue';

export default {
  name: 'layout',
  components: {
    footerGrid,
    headerGrid,
    menuBar,
  },
  data() {
    return {
      mode: process.env.VUE_APP_MODE,
    };
  },
  created() {
    if (!this.isSimpleLayout) {
      this.$post('/menus').then(res => {
        this.$store.commit('ADD_MENU', res.data);
      });
    } else {
      // 每次刷新页面或重新进入页面都设置，避免token失效
      setToken(this.$route.query.token);
    }
  },
  computed: {
    isSimpleLayout() {
      return this.mode === 'simple';
    },
  },
};
</script>
