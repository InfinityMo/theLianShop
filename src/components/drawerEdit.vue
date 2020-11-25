<template>
  <div class="drawer-box">
    <hr class="split-line">
    <el-form label-width="110px"
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
  </div>
</template>
<script>
import { editForm, editFormRules } from '@/common/formData/form'
export default {
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
  }
}
</script>
<style lang="less" scoped>
// /deep/.el-drawer__header {
//   margin-bottom: 20px;
// }
.drawer-box {
  width: 100%;
  .split-line {
    margin: 0 0 20px 0;
    border: none;
    height: 1px;
    background-color: #d9d9d9;
  }
  .edit-date-picker {
    width: 326px;
  }
}
</style>
