<template>
  <div class="page">
    <div class="add-wrap">
      <h5>新增商品</h5>
      <Step :stepsData="stepsData"
            class="step"
            :active='active' />
      <step-one @nextHandle="nextHandle" />
      <Tip />
    </div>
  </div>
</template>
<script>
import Step from '@/components/steps'
import StepOne from './stepOne'
import Tip from './tip'
export default {
  components: {
    Step,
    StepOne,
    Tip
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
    nextHandle () {
      this.active++
    }
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
