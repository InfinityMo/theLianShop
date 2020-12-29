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
      <step-three v-show="active===2" />
      <Tip />
    </div>
  </div>
</template>
<script>
import Step from '@/components/steps'
import StepOne from './steps/stepOne'
import StepTwo from './steps/stepTwo'
import StepThree from './steps/stepThree'
import Tip from './tip'
import { backTop } from '@/common/utils/funcStore'
export default {
  components: {
    Step,
    StepOne,
    StepTwo,
    StepThree,
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
    stepOne (data) {
      this.active++
      backTop()
    },
    stepTwo (data) {
      this.active++
      backTop()
    },
    stepTwoBack () {
      this.active--
      backTop()
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
