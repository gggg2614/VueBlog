<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in image" :key="item.id">
        <img :src="item.idView" class="image" />
      </el-carousel-item>
    </el-carousel>

    <el-row>
  <el-col :span="8" >
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/pic/1.jpg" class="image">
      <div style="padding: 14px;">
        <span>文章1</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">按钮</el-button>
              <el-divider></el-divider>
          <h5>{{pre}}</h5>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>
  </div>
</template>

<script>
export default {
    data(){
        return{
            image:[{id:0,idView:require('@/assets/pic/1.jpg')},
            {id:1,idView:require('@/assets/pic/2.jpg')},
            {id:2,idView:require('@/assets/pic/3.jpg')},
            {id:3,idView:require('@/assets/pic/4.jpg')},
            ],
            currentDate:new Date(),
            pre:"预览",
        }
    }
};
</script>

<style lang="less">
@import url("picture.less");
</style>
 