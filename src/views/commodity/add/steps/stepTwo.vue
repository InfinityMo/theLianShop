<template>
  <div class="from-wrap clearfix">
    <!-- <el-form label-width="110px"
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
    </el-form> -->
    <el-row>
      <p><em>*</em><span>主题图片</span></p>
      <div class="img-box">
        <Upload />
      </div>
    </el-row>
    <el-row>
      <p><em>*</em><span>主题图片</span>可添加多个商品规格</p>
      <el-form ref="stepTwoForm"
               label-width="85px">
        <div class="commodity-item"
             v-for="(commodity,index) in commodityArr"
             :key="index">
          <i class="delete-icon"></i>
          <el-row>
            <el-col :span="12">
              <el-form-item label="商品规格："
                            :prop="'commodity.' + index + '.size'"
                            :rules="[{ required: true, message: '请输入商品规格', trigger: 'blur' }]">
                <el-input v-model="commodity.size"
                          placeholder="如: 女款/蓝色/S码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="生产日期：">
                <el-date-picker v-model="commodity.date"
                                type="date"
                                placeholder="请选择生产日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="商品库存："
                            :prop="'commodity.' + index + '.stock'"
                            :rules="[{ required: true, message: '请输入商品库存', trigger: 'blur' }]">
                <el-input v-model="commodity.size"
                          placeholder="如: 女款/蓝色/S码"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="对应价格："
                            :prop="'commodity.' + index + '.price'"
                            :rules="[{ required: true, message: '请输入对应价格', trigger: 'blur' }]">
                <el-input v-model="commodity.size"
                          placeholder="如: 女款/蓝色/S码"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
        <div class="add-commodity"
             @click="addCommodity">
          <p><i></i><span>添加新的规格</span></p>
        </div>
      </el-form>
    </el-row>
    <el-button @click="back">上一步</el-button>
    <el-button type="primary"
               @click="submit">提 交</el-button>
  </div>
</template>
<script>
import Upload from '@/components/upload'
import { stepOneForm, stepOneFormRules } from './formData'
export default {
  components: {
    Upload
  },
  data () {
    return {
      commodityArr: [{
        size: '',
        date: '',
        stock: '',
        price: ''
      }],
      stepOneFormRules: stepOneFormRules,
      stepOneForm: JSON.parse(JSON.stringify(stepOneForm))

    }
  },
  created () {

  },
  methods: {
    addCommodity () {
      this.commodityArr.push({
        size: '',
        date: '',
        stock: '',
        price: ''
      })
    },
    back () {
      this.$emit('stepTwoBack', this.stepOneForm)
    },
    submit () {
      this.$refs.stepFrom.validate((valid) => {
        if (valid) {
          this.$emit('stepTwo', this.stepOneForm)
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import "./stepTwo";
</style>
