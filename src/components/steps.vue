<template>
  <div>
    <ul class="flex-item-center step-wrap">
      <li v-for="(step,index) in stepsData"
          :key="index"
          class="flex-item-center"
          :class="{'flex-basis':index!==stepsData.length-1,'is-flex':index===stepsData.length-1}">
        <div class="flex-item-center title"
             :class="{'text-active':active>=index}">
          <span>{{index+1}}</span>
          <label>{{step}}</label>
        </div>
        <div class="line"
             :class="{'line-active':active>index}"
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
  },
  data () {
    return {

    }
  },
  mounted () {
    console.log(this.active)
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.step-wrap {
  .flex-basis {
    flex-basis: 50%;
  }
  li {
    position: relative;
    color: #aaa;
    .title {
      position: absolute;
      left: 0;
      padding: 0 20px;
      background-color: #fff;
      // margin-right: 20px;
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
    .title:last-child {
      position: relative;
    }
    .text-active {
      span {
        color: #fff;
        border: 1px solid #2bb8bd;
        background-color: #2bb8bd;
      }
      label {
        color: #333;
      }
    }

    .line {
      width: 100%;
      // margin-left: 20px;
      height: 1px;
      border-bottom-color: #f0f0f0;
      border-bottom: 1px solid;
      box-sizing: border-box;
    }
    .line-active {
      border-bottom-color: #2bb8bd;
    }
  }

  .is-flex {
    flex-basis: auto !important;
    flex-shrink: 0;
    flex-grow: 0;
  }
}
</style>
