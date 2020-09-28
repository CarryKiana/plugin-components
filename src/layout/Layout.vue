<template>
  <div class="app-wrapper">
    <div class="app-header">稍微有点复杂的插件在vue中使用示例</div>
    <div class="app-content">
      <div class="app-nav">
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>d3</span>
            </template>
            <el-menu-item index="/">柱状图表</el-menu-item>
          </el-submenu>
          <el-menu-item index="/baidumap">
            <i class="el-icon-menu"></i>
            <span slot="title">百度地图</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="app-main">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.app-wrapper {
  height: 100vh;
  .app-header {
    line-height: 60px;
    text-align: center;
    box-sizing: border-box;
    border-bottom: solid 1px #ccc;
  }
  .app-content {
    height: calc(100% - 60px);
    display: flex;
    .app-nav {
      flex: 0 0 200px;
    }
    .app-main {
      flex: auto;
      height: 100%;
    }
  }
}
</style>