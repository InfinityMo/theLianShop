<template>
  <div class="drawer-wrap">
    <el-drawer :title="title"
               :destroy-on-close="true"
               :size="width"
               :wrapperClosable="wrapperClosable"
               custom-class="drawer-box"
               :visible.sync="drawerShow"
               direction="rtl">
      <div slot="title">
        <span>{{title}}</span>
        <hr class="split-line">
      </div>
      <slot name="content"></slot>
    </el-drawer>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '查看'
    },
    width: {
      type: String
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      drawerShow: false
    }
  },
  mounted () {

  }
}
</script>
<style lang="less" scoped>
/deep/.el-drawer__header {
  margin-bottom: 20px;
}
.split-line {
  margin: 20px 0 0 0;
  border: none;
  height: 1px;
  background-color: #d9d9d9;
}
</style>
