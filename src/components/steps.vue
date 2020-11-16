<template>
  <div>
    <ul class="flex-item-center step-wrap">
      <li v-for="(step,index) in stepsData"
          :key="index"
          class="flex-between-center"
          :class="{'flex-basis':index!==stepsData.length-1}">
        <div class="flex-item-center title">
          <span>{{index+1}}</span>
          <label>{{step}}</label>
        </div>
        <div class="line"
             v-if="index!==stepsData.length-1"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    stepsData: {
      type: Array,
      required: true,
      default: () => []
    },
    active: {
      type: Number,
      required: true,
      default: 0
    }
  }

}
</script>
<style lang="less" scoped>
.step-wrap {
  .flex-basis {
    flex-basis: 45%;
  }
  li {
    color: #AAA;
    .title {
      margin-right: 20px;
      span {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        font-size: 16px;
        text-align: center;
        line-height: 32px;
        border-radius: 50%;
        border: 1px solid #aaa;
        box-sizing: border-box;
      }
      label {
        font-size: 18px;
      }
    }

    .line {
      width: calc(100% - 154px);
      height: 1px;
      border-bottom-color: #F0F0F0;
      border-bottom: 1px solid;
      box-sizing: border-box;
    }
  }
}
</style>
