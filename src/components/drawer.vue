<template>
  <div class="drawer-wrap">
    <el-drawer :title="title"
               :destroy-on-close="true"
               :size="width"
               custom-class="drawer-box"
               :visible.sync="drawerShowCopy"
               direction="rtl">
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
    drawerShow: {
      type: Boolean,
      required: true,
      default: false
    },
    wrapperClosable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      drawerShowCopy: this.drawerShow
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
</style>
