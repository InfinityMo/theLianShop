<template>
  <div class="drawer-box">
    <!-- <hr class="split-line"> -->
    <el-form label-width="101px"
             ref="stepFrom"
             :model="editForm"
             :rules="editFormRules"
             class="form drawer-form">
      <el-form-item label="商品名称："
                    prop="wareName">
        <el-input v-model="editForm.wareName"
                  placeholder="请输入商品名称"></el-input>
      </el-form-item>
      <el-form-item label="品牌名称："
                    prop="brandName">
        <el-select v-model="editForm.brandName"
                   popper-class="drawer-dropDown"
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
        <el-cascader v-model="editForm.wareType"
                     popper-class="drawer-dropDown"
                     clearable
                     separator=" - "
                     placeholder="请选择所属类目"
                     :props="{ checkStrictly: true }"
                     :options="wareTypeOptions"></el-cascader>
      </el-form-item>
      <el-form-item label="商品保质期：">
        <el-input placeholder="请输入商品保质期"
                  v-model="editForm.wareDate"
                  class="input-with-select">
          <el-select v-model="editForm.wareDateType"
                     class="date-select"
                     popper-class="drawer-dropDown"
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
        <el-input v-model="editForm.limitNum"
                  placeholder="请输入商品限购数量"></el-input>
      </el-form-item>
      <el-form-item label="上/下架时间："
                    prop="saleTime">
        <el-date-picker v-model="editForm.saleTime"
                        class="edit-date-picker"
                        popper-class="drawer-dropDown"
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
                  v-model="editForm.desc">
        </el-input>
      </el-form-item>
    </el-form>
    <el-form :model="commodityData"
             class="commodity-wrap"
             ref="commodityData"
             label-width="82px">
      <el-row>
        <p class="step-title"><em>*</em>主图图片：<span>支持png/jpg/jpeg格式</span></p>
        <el-form-item label-width="0px"
                      prop="imgArr"
                      :rules="[{ required: true, message: '请上传图片', trigger: ['change','blur'] }]">
          <div class="img-box">
            <Upload class="upload-box" />
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
        <el-form-item label="商品规格："
                      :prop="'commodityArr.' + index + '.size'"
                      :rules="{required: true, message: '商品规格不能为空', trigger: 'blur'}">
          <el-input v-model="commodity.size"
                    placeholder="如: 女款/蓝色/S码"></el-input>
        </el-form-item>
        <el-form-item label="生产日期：">
          <el-date-picker v-model="commodity.date"
                          popper-class="drawer-dropDown"
                          type="date"
                          placeholder="请选择生产日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="商品库存："
                      :prop="'commodityArr.' + index + '.stock'"
                      :rules="{required: true, message: '商品库存不能为空', trigger: 'blur'}">
          <el-input v-model="commodity.stock"
                    placeholder="请输入此规格的对应库存"></el-input>
        </el-form-item>

        <el-form-item label="对应价格："
                      :prop="'commodityArr.' + index + '.price'"
                      :rules="{required: true, message: '对应价格不能为空', trigger: 'blur'}">
          <el-input v-model="commodity.price"
                    placeholder="请输入此规格的对应价格"></el-input>
        </el-form-item>
      </div>
      <div class="add-commodity"
           @click="addCommodity">
        <p><i></i><span>添加新的规格</span></p>
      </div>
    </el-form>
    <div class="btn-group">
      <el-button @click="back">取 消</el-button>
      <el-button type="primary"
                 @click="submitForm">提 交</el-button>
    </div>
  </div>
</template>
<script>
import { editForm, editFormRules } from '@/common/formData/form'
import Upload from '@/components/upload'
export default {
  components: {
    Upload
  },
  props: {
    commodity: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      editFormRules: editFormRules,
      editForm: Object.assign({}, editForm),
      commodityData: {
        commodityArr: [{
          size: '',
          date: '',
          stock: '',
          price: ''
        }],
        imgArr: []
      },
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
  methods: {
    removeItem (index) {
      this.commodityData.commodityArr.splice(index, 1)
    },
    addCommodity () {
      this.commodityData.commodityArr.push({
        size: '',
        date: '',
        stock: '',
        price: ''
      })
    }
  }
}
</script>
<style lang="less" scoped>
// /deep/.el-drawer__header {
//   margin-bottom: 20px;
// }
.drawer-box {
  // width: 100%;

  .edit-date-picker {
    width: 339px;
  }
  /deep/.el-select,
  /deep/.el-cascader {
    .el-input__inner {
      width: 339px;
    }
  }
  .el-input-group__append {
    .el-select {
      width: 72px;
      /deep/.el-input__inner {
        width: 72px;
      }
    }
  }
  .commodity-wrap {
    .img-box {
      display: flex;
      align-items: center;
      width: 442px;
      padding: 10px 10px 0 10px;
      box-sizing: border-box;
      border-radius: 2px;
      border: 1px solid#d9d9d9;
      .upload-box {
        /deep/.el-upload-list__item {
          width: 76px;
          height: 76px;
          margin: 0 10px 10px 0;
        }
        /deep/.el-upload-list__item:nth-child(5) {
          margin: 0 0 10px 0;
        }
        /deep/.el-upload--picture-card {
          width: 76px;
          height: 76px;
          margin-bottom: 10px;
        }
        /deep/.custom-upload {
          flex-wrap: wrap;
          height: auto;
        }
        /deep/.el-upload-list--picture-card {
          display: flex;
          flex-wrap: wrap;
        }
      }
    }

    .commodity-item {
      position: relative;
      width: 440px;
      padding: 20px;
      margin-bottom: 24px;
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      box-sizing: border-box;

      .delete-icon {
        width: 17px;
        height: 17px;
        position: absolute;
        right: -9px;
        top: -9px;
        background: url("~@/assets/img/icons/delete.png") center center
          no-repeat;
        cursor: pointer;
      }

      /deep/ .el-input__inner {
        width: 316px;
      }
    }

    .add-commodity {
      width: 440px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      color: #2bb8bd;
      border: 1px dashed #2bb8bd;
      box-sizing: border-box;
      border-radius: 1px;
      cursor: pointer;

      p {
        display: flex;
        align-items: center;
        justify-content: center;

        i {
          display: block;
          width: 14px;
          height: 14px;
          margin-right: 10px;
          background: url("~@/assets/img/icons/add.png") center center no-repeat;
        }
      }
    }

    .step-title {
      margin-bottom: 10px;
      font-size: 14px;
      color: #333;

      em {
        margin-right: 4px;

        color: #f56c6c;
      }

      span {
        font-size: 12px;
        color: #777;
      }
    }

    .el-date-editor.el-input,
    .el-date-editor.el-input__inner {
      width: 187px;
    }
  }
  .btn-group {
    display: flex;
    justify-content: flex-end;
    padding: 30px 0;
  }
}
</style>
