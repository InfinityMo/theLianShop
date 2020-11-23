<template>
  <div class="drawer-wrap">
    <!-- <div class="flex-between-center">
      <h5>编辑</h5>
      <i class="delete-ico"></i>
    </div>
    <slot name="content"></slot> -->
    <el-drawer title="我是标题"
               :visible.sync="drawer"
               direction="rtl">
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '查看'
    }
  },
  data () {
    return {
      drawer: true
    }
  }
}
</script>
<style lang="less" scoped>
</style>
