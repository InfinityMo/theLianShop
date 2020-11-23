<template>
  <div class="page">
    <div class="search-wrap">
      <el-form class="demo-form-inline"
               :model="searchForm"
               ref="searchForm">
        <el-col :span="7">
          <el-form-item label="商品名称："
                        label-width="80px"
                        prop="commodityName">
            <el-input placeholder="请输入商品名称"
                      v-model="searchForm.commodityName"
                      clearable>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="商品类型："
                        label-width="80px"
                        prop="commodityType">
            <el-cascader :options="wareTypeOptions"
                         v-model="searchForm.commodityType"
                         :props="{ checkStrictly: true }"
                         clearable>
            </el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item class="search-btn">
            <el-button @click="resetForm('searchForm')">重置</el-button>
            <el-button type="primary"
                       @click="queryHandel">查询</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </div>
    <div class="table-wrap">
      <div class="flex-between-center table-info">
        <h4>店铺信息列表</h4>
        <el-button type="primary"
                   @click="addHandle"
                   class="flex-center add-btn">
          <i class="add-icon"></i>
          <label>新增商品</label>
        </el-button>
      </div>
      <standard-table :dataSource="tableData"
                      :columns="columns"
                      :pagination="PAGING"
                      @tableChange="tableChange" />
    </div>
    <drawer-edit></drawer-edit>
  </div>
</template>
<script>
import tableMixin from '@/mixins/dealTable'
import { columnsData } from './columnsData.js'
import { tableSearchForm } from './searchForm'

export default {
  mixins: [tableMixin],
  data () {
    return {
      tipContent: '',
      searchForm: tableSearchForm,
      queryFrom: { RowGuid: '' },
      columns: columnsData(this.$createElement, this),
      tableData: [],
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
  watch: {

  },
  created () {

  },
  mounted () {
    // this.getTableData()
  },
  methods: {
    // getTableData () {
    //   this.$request.post('/splm.asp', {
    //     spurl32: encodeURI('https://detail.tmall.com/item.htm?spm=a220o.1000855.0.0.6aa63e36iDeLes&pvid=700d7ecf-b3b6-41b4-8cba-5c98c0a3e734&pos=1&acm=03067.1003.1.1977615&id=544772098737&scm=1007.12776.82642.100200300000000'),
    //     Submit: encodeURI('查询'),
    //     fyj: encodeURI('sp')
    //   }).then(res => {
    //     debugger
    //   })
    // },
    getSelects () {
      this._getSelectData(1).then(res => {
        this.selectOption = res
      }) // 获取下拉框数据
    },
    // getTableData () {
    //   this.$request.post('/shopSelect', {
    //     pageNum: this.PAGING.pageNum,
    //     pageSize: this.PAGING.pageSize,
    //     ...this.queryFrom
    //   }).then(res => {
    //     const resData = res.data.result || []
    //     this.tableData = resData
    //     this.PAGING.total = res.data.total
    //   })
    // },
    // 新增
    addHandle () {
      this.$router.push('/commodity/add')
    },
    editMoadl (scoped) {
      this._getSelectData(6).then(res => {
        res.map(item => {
          this.brandArr.push({
            label: item.label,
            key: item.value
          })
        })
        this.modalShow = true
        const { row } = scoped
        this.addEditId = row.RowGuid
        this.modalTitle = '编辑店铺'
      })
    },
    // modal确认
    modalConfirm () {
      this.modalShow = false
      this.brandArr = []
      this.selectOption = []
      this.getTableData()
      this.getSelects()
    },
    // moadl关闭
    modalCancel () {
      this.brandArr = []
      this.modalShow = false
    },
    deleteHandle (scoped) {
      const { row } = scoped
      this.$request.post('/shopDelete', {
        RowGuid: row.RowGuid
      }).then(res => {
        if (res.errorCode === 1) {
          this.$message.success('删除成功')
          // 删除时需判断是不是最后一页
          this._isLastPage()
          this.getTableData()
        } else {
          this.$message.error('删除失败')
        }
      })
    },
    queryHandel () {
      this.queryFrom = {
        RowGuid: this.searchForm.RowGuid[0] || ''
      }
      this.getTableData()
    },
    // 表格分页的变化
    tableChange (changeParams) {
      this.PAGING.pageSize = changeParams.pageSize
      this.PAGING.pageNum = changeParams.pageNum
      this.getTableData()
    }
  }
}
</script>
<style lang="less" scoped>
@import "../../../common/styles/page-table";
</style>
