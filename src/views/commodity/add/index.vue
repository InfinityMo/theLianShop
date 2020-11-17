<template>
  <div class="page">
    <div class="add-wrap">
      <h5>新增商品</h5>
      <Step :stepsData="stepsData"
            class="step"
            :active='active' />
      <el-form label-width="100px"
               class="form">
        <el-form-item label="商品名称：">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入商品名称"></el-input>
        </el-form-item>
        <el-form-item label="品牌名称：">
          <el-select v-model="value"
                     placeholder="请选择品牌名称">
            <el-option v-for="item in options"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品类型：">
          <el-cascader :options="options"
                       placeholder="请选择商品类型"
                       :props="{ checkStrictly: true }"
                       clearable></el-cascader>
        </el-form-item>
        <el-form-item label="商品保质期：">
          <el-input placeholder="请输入商品保质期"
                    v-model="input3"
                    class="input-with-select">
            <el-select v-model="select"
                       placeholder=""
                       slot="append">
              <el-option label="餐厅名"
                         value="1"></el-option>
              <el-option label="订单号"
                         value="2"></el-option>
              <el-option label="用户电话"
                         value="3"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="限购数量：">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入商品限购数量"></el-input>
        </el-form-item>
        <el-form-item label="商品限购数量：">
          <el-input v-model="ruleForm.name"
                    placeholder="请输入商品限购数量"></el-input>
        </el-form-item>
        <el-form-item label="上/下架时间：">
          <el-date-picker class="form-date-picker"
                          v-model="ruleForm.checkTime"
                          value-format="yyyy-MM-dd HH:mm"
                          format="yyyy-MM-dd HH:mm"
                          type="datetimerange"
                          align="right"
                          unlink-panels
                          range-separator="~"
                          start-placeholder="上架时间"
                          end-placeholder="下架时间">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="商品描述：">
          <el-input type="textarea"
                    :rows="2"
                    resize="none"
                    placeholder="请对商品的重要特征即及需要用户注意的事项进行描述"
                    v-model="textarea">
          </el-input>
        </el-form-item>
      </el-form>
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
      active: 2,
      ruleForm: {

      }
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
