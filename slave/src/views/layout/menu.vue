<template>
  <div>
    <el-menu
      :router="true"
      :unique-opened="true"
      background-color="#303133"
      text-color="#fff"
      default-active="/index"
    >
      <template v-for="(item, index) in menuRender">
        <template v-if="!item.children || item.children.length === 0">
          <!-- 一级菜单 -->
          <el-menu-item :key="index" :index="item.index">
            <i :class="item.icon"></i>{{ item.name }}
          </el-menu-item>
        </template>

        <template v-else>
          <!-- 二级菜单 -->
          <el-submenu :key="index" :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>{{ item.name }}
            </template>
            <template v-for="children in item.children">
              <el-menu-item :key="children.id" :index="children.index">
                {{ children.name }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'menuCom',
  components: {},
  data() {
    return {};
  },
  computed: mapState({
    menuRender(state) {
      return state.menu.menuData;
    },
  }),
};
</script>
