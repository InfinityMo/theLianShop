<template>
  <div class="from-wrap clearfix">
    <el-form :model="commodityData"
             ref="commodityData"
             label-width="82px">
      <el-row>
        <p class="step-title"><em>*</em>主图图片：<span>支持png/jpg/jpeg格式</span></p>
        <el-form-item label-width="0px"
                      prop="imgArr"
                      :rules="[{ required: true, message: '请上传图片', trigger: ['change','blur'] }]">
          <div class="img-box">
            <Upload :fileArr="commodityData.imgArr"
                    @uploadAdd="uploadAdd"
                    @uploadRemove="uploadRemove" />
          </div>
        </el-form-item>
      </el-row>
      <p class="step-title">
        <em>*</em>商品规格：<span>可最多添加5个商品规格</span>
      </p>
      <div class="commodity-item"
           v-for="(commodity, index) in commodityData.commodityArr"
           :key="index">
        <i class="delete-icon"
           @click="removeItem(index)"></i>
        <el-row>
          <el-col :span="12">
            <el-form-item label="商品规格："
                          :prop="'commodityArr.' + index + '.size'"
                          :rules="{required: true, message: '商品规格不能为空', trigger: 'blur'}">
              <el-input v-model="commodity.size"
                        placeholder="如: 女款/蓝色/S码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="生产日期：">
              <el-date-picker v-model="commodity.date"
                              :picker-options="disabledTime"
                              type="date"
                              placeholder="请选择生产日期"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="商品库存："
                          :prop="'commodityArr.' + index + '.stock'"
                          :rules="{required: true, message: '商品库存不能为空', trigger: 'blur'}">
              <el-input v-model="commodity.stock"
                        placeholder="请输入此规格的对应库存"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="对应价格："
                          :prop="'commodityArr.' + index + '.price'"
                          :rules="{required: true, message: '对应价格不能为空', trigger: 'blur'}">
              <el-input v-model="commodity.price"
                        placeholder="请输入此规格的对应价格"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <div v-if="commodityData.commodityArr.length<5"
           class="add-commodity"
           @click="addCommodity">
        <p><i></i><span>添加新的规格</span></p>
      </div>
    </el-form>
    <div class="btn-group">
      <el-button @click="back">上一步</el-button>
      <el-button type="primary"
                 @click="submitForm">提 交</el-button>
    </div>
  </div>
</template>
<script>
import Upload from '@/components/upload'
export default {
  components: {
    Upload
  },
  data () {
    return {
      disabledTime: {
        disabledDate: (time) => {
          return time.getTime() > Date.now() - 1 * 24 * 3600 * 1000
        }
      },
      commodityData: {
        commodityArr: [{
          size: '',
          date: '',
          stock: '',
          price: ''
        }],
        imgArr: []
      }
    }
  },
  created () {

  },
  methods: {
    uploadAdd (fileList) {

    },
    uploadRemove (fileList) {

    },
    back () {
      this.$emit('stepTwoBack', this.stepOneForm)
    },
    removeItem (index) {
      if (this.commodityData.commodityArr.length < 2) {
        return false
      }
      this.commodityData.commodityArr.splice(index, 1)
    },
    addCommodity () {
      this.commodityData.imgArr.push(1)
      console.log(this.commodityData.imgArr)
      this.commodityData.commodityArr.push({
        size: '',
        date: '',
        stock: '',
        price: ''
      })
    },
    submitForm () {
      this.$refs.commodityData.validate((valid) => {
        if (valid) {
          this.$emit('stepTwo', this.commodityData)
        } else {
          console.log('error submit!!')
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
