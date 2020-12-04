<template>
  <div class="step-success">
    <img src="@/assets/img/icons/add-success.png">
    <h3>新增成功</h3>
    <p>可在未发布中查看或再次编辑已新增的商品</p>
    <div class="btn-group">
      <el-button type="primary"
                 @click="continueAdd">继续新增</el-button>
      <el-button @click="viewCommodity">查看商品</el-button>
    </div>
  </div>
</template>
<script>

export default {

  data () {
    return {}
  },
  created () {

  },
  methods: {
    continueAdd () {
      // this.$emit('stepTwoBack', this.stepOneForm)
    },
    viewCommodity () {
      this.$router.push('/commodity/unreleased')
    }
  }
}
</script>
<style lang="less" scoped>
@import "./stepThree.less";
</style>
