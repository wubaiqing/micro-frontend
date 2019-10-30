<template>
  <el-row class="header-container">
    <el-col :span="24" class="header">
      <el-col :span="4" class="logo">
        <router-link to="/">
          <img src="/xy-logo.png" width="149" height="38" alt="" />
        </router-link>
      </el-col>
      <el-col :span="20" class="nav-list">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <i class="xy-v2-yh"></i>欢迎<i class="xy-v2-arrow"></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-user">
            <el-dropdown-item class="dropdown-item" command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'HeaderBar',
};
</script>
<style lang="scss" scoped>
.el-dropdown-menu {
  /*让该处优先级最高*/
  margin-top: 0 !important;
}
.el-dropdown-menu.dropdown-user {
  width: 200px;
}
</style>
