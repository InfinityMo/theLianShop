<template>
  <div class="page">
    <div class="add-wrap">
      <h5>新增商品</h5>
      <Step :stepsData="stepsData"
            class="step"
            :active='active' />
      <step-one @stepOne="stepOne"
                v-show="active===0" />
      <step-two @stepTwo="stepTwo"
                @stepTwoBack="stepTwoBack"
                v-show="active===1" />
      <Tip />
    </div>
  </div>
</template>
<script>
import Step from '@/components/steps'
import StepOne from './steps/stepOne'
import StepTwo from './steps/stepTwo'
import Tip from './tip'
export default {
  components: {
    Step,
    StepOne,
    StepTwo,
    Tip
  },
  data () {
    return {
      stepsData: ['基本信息', '图片/规格', '完成'],
      active: 1
    }
  },

  created () {
    // this.getSelects()
  },

  methods: {
    stepOne (data) {
      this.active++
    },
    stepTwo (data) {
      this.active++
    },
    stepTwoBack () {
      this.active--
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
