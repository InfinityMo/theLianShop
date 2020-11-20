<template>
  <div class="step-success">
    <img src="@/assets/img/icons/add-success.png">
    <h3>新增成功</h3>
    <p>可在未发布中查看或再次编辑已新增的商品</p>
    <div class="btn-group">
      <el-button type="primary">继续新增</el-button>
      <el-button>查看商品</el-button>
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

  }
}
</script>
<style lang="less" scoped>
@import "./stepThree.less";
</style>
