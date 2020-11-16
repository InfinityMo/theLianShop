<template>
  <div class="page">
    <div class="add-wrap">
      <h5>新增商品</h5>
      <Step :stepsData="stepsData"
            :active='active' />
    </div>
  </div>
</template>
<script>
import Step from '@/components/steps'
export default {
  components: {
    Step
  },
  data () {
    return {
      stepsData: ['基本信息', '图片/规格', '完成'],
      active: 0
    }
  },

  created () {
    // this.getSelects()
  },

  methods: {
    // next () {
    //   if (this.active++ > 2) this.active = 0
    // }
  }
}
</script>
<style lang="less" scoped>
@import "../../../common/styles/page-table";
@import "./add";
</style>
