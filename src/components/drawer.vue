<template>
  <div class="drawer-wrap">
    <el-drawer :title="title"
               @open="drawerOpen"
               :destroy-on-close="true"
               :size="width"
               :wrapperClosable="wrapperClosable"
               custom-class="drawer-box"
               :visible.sync="drawerShow"
               :before-close="beforeClose"
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

  },
  methods: {
    drawerOpen () {
      this.drawerShow = true
    },

    beforeClose (done) {
      if (!this.wrapperClosable) {
        this.$confirm('还有未保存的编辑，确定关闭吗？', '提示', {
          customClass: 'drawer-message-box'
        }).then(_ => {
          done()
        }).catch(_ => { })
      } else {
        done()
      }
    }
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
