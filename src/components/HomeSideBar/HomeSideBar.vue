<template>
  <el-row class="tac">
    <h5>欢迎第 <template>1</template> 位</h5>
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#3d3d3d"
      text-color="#fff"
      unique-opened
      active-text-color="rgb(64, 158, 255)"
      router
    >
      <el-menu-item index="/home">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/home/artical">
        <i class="el-icon-menu"></i>
        <span slot="title">文章</span>
      </el-menu-item>
      <el-menu-item index="/home/about">
        <i class="el-icon-document"></i>
        <span slot="title">关于我</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
</style>