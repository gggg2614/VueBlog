<template>
  <div class="home">
    <el-row>
      <el-container>
        <!-- 顶部 -->
          <el-header><HomeTopBar /></el-header>
        <el-container>
          <!-- 侧栏 -->
            <el-aside width="200px"><HomeSideBar /> </el-aside>
          <el-container>
            <el-main>
                <router-view></router-view>
            </el-main>
            <!-- 底部 -->
            <el-footer><HomeFootBar /> </el-footer>
          </el-container>
        </el-container>
      </el-container>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeTopBar from "@/components/HomeTopBar/HomeTopBar.vue";
import HomeSideBar from "@/components/HomeSideBar/HomeSideBar.vue";
import HomeFootBar from "@/components/HomeFootBar/HomeFootBar.vue";
export default {
  name: "Home",
  components: {
    HomeTopBar,
    HomeSideBar,
    HomeFootBar,
  },
};
</script>

<style lang="less" scoped>
@import url(./home.less);
</style>