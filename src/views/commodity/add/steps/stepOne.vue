<template>
  <div class="from-wrap clearfix">
    <el-form label-width="110px"
             ref="stepFrom"
             :model="stepOneForm"
             :rules="stepOneFormRules"
             class="form">
      <el-form-item label="商品名称："
                    prop="wareName">
        <el-input v-model="stepOneForm.wareName"
                  placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="品牌名称："
                    prop="brandName">
        <el-select v-model="stepOneForm.brandName"
                   placeholder="请选择品牌名称">
          <el-option v-for="item in brandArr"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="所属类目："
                    prop="wareType">
        <el-cascader v-model="stepOneForm.wareType"
                     clearable
                     separator=" - "
                     placeholder="请选择所属类目"
                     :props="{ checkStrictly: true }"
                     :options="wareTypeOptions"></el-cascader>
      </el-form-item>
      <el-form-item label="商品保质期：">
        <el-input placeholder="请输入商品保质期"
                  v-model="stepOneForm.wareDate"
                  class="input-with-select">
          <el-select v-model="stepOneForm.wareDateType"
                     placeholder=""
                     slot="append">
            <el-option v-for="item in wareDateType"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value">
            </el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="限购数量："
                    prop="limitNum">
        <el-input v-model="stepOneForm.limitNum"
                  placeholder="请输入商品限购数量"></el-input>
      </el-form-item>
      <el-form-item label="上/下架时间："
                    prop="saleTime">
        <el-date-picker class="form-date-picker"
                        v-model="stepOneForm.saleTime"
                        value-format="yyyy-MM-dd HH:mm"
                        format="yyyy-MM-dd HH:mm"
                        type="datetimerange"
                        align="right"
                        unlink-panels
                        range-separator="~"
                        @change="disabledTimeHandle"
                        :picker-options="disabledTime"
                        start-placeholder="上架时间"
                        end-placeholder="下架时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="商品描述："
                    prop="desc">
        <el-input type="textarea"
                  :rows="2"
                  resize="none"
                  placeholder="请对商品的重要特征即及需要用户注意的事项进行描述"
                  v-model="stepOneForm.desc">
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary"
               @click="next">下一步</el-button>
  </div>
</template>
<script>
import { stepOneForm, stepOneFormRules } from './formData'
import { dateFormat } from '@/common/utils/funcStore'
export default {

  data () {
    return {
      disabledTime: {
        disabledDate: (time) => {
          return time.getTime() < Date.now() - 1 * 24 * 3600 * 1000
        }
      },
      stepOneFormRules: stepOneFormRules,
      stepOneForm: Object.assign({}, stepOneForm),
      wareDateType: [
        {
          value: '1',
          label: '年'
        }, {
          value: '2',
          label: '月'
        }, {
          value: '3',
          label: '日'
        }
      ],
      brandArr: [{
        value: '1',
        label: '悦诗风吟'
      }, {
        value: '2',
        label: '珂润'
      }],
      wareTypeOptions: [
        {
          value: 'xihu',
          label: '洗护',
          children: [{
            value: 'xx',
            label: '香薰',
            children: [{
              value: 'jc',
              label: '绿茶籽'
            }]
          }]
        }
      ]
    }
  },
  created () {
    // this.getWareType()
  },
  methods: {
    disabledTimeHandle () {
      const startAtOne = new Date(this.stepOneForm.saleTime[0]) * 1000 / 1000
      const startAtTwo = new Date(this.stepOneForm.saleTime[1]) * 1000 / 1000
      if (startAtOne < Date.now()) {
        this.stepOneForm.saleTime[0] = dateFormat('YYYY-mm-dd HH:MM', new Date())
      }
      if (startAtTwo < Date.now()) {
        this.stepOneForm.saleTime[1] = dateFormat('YYYY-mm-dd HH:MM', new Date())
      }
    },
    getWareType () {
      this.$request.mock('mockData/mock.json?t=' + new Date().getTime()).then(res => {
        debugger
      })
    },
    next () {
      this.$emit('stepOne', this.stepOneForm)
      // this.$refs.stepFrom.validate((valid) => {
      //   if (valid) {
      //     this.$emit('stepOne', this.stepOneForm)
      //   } else {
      //     return false
      //   }
      // })
    }
  }
}
</script>
<style lang="less" scoped>
@import "./stepOne.less";
</style>
