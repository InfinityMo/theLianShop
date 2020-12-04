<template>
  <div class="page">
    <div class="search-wrap">
      <el-form class="demo-form-inline"
               :model="searchForm"
               id="form"
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
                         placeholder="请选择商品类型"
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
    <div class="table-wrap"
         ref="table">
      <div class="flex-between-center table-info">
        <h4>已下架列表</h4>
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
    <drawer :title="drawerTitle"
            :width="drawerWidth"
            :wrapperClosable="drawerWrapperClosable"
            ref="drawer">
      <div slot="content"
           class="drawer-content-wrap">
        <drawer-edit v-if="drawerFlag===0"
                     @closeDrawer="closeDrawer"
                     :commodityId="commodity"></drawer-edit>
        <drawer-view v-else
                     :commodityId="commodity">
        </drawer-view>
      </div>
    </drawer>
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
      ],
      drawerFlag: 0, // 0是编辑，1是查看
      drawerShow: false,
      drawerWrapperClosable: false,
      drawerTitle: '编辑',
      commodity: '',
      drawerWidth: '497px'
    }
  },

  created () {

  },
  mounted () {
    this.getTableData()
  },
  methods: {
    getTableData () {
      for (let i = 0; i < 2; i++) {
        this.tableData.push({
          commodityName: 'innisfree/悦诗风吟绿茶泡沫洁面乳女 补水保湿温和控油洗面奶男',
          price: '60 - 80',
          type: '洁面乳',
          limitNum: 3,
          offTime: '2020-11-28 00:00',
          dateTime: '2020-11-25 00:00 - 2020-11-28 00:00'
        })
      }
      // this.tableData = [{

      // }]
      this.PAGING.total = 10
      // this.$request.post('/shopSelect', {
      //   pageNum: this.PAGING.pageNum,
      //   pageSize: this.PAGING.pageSize,
      //   ...this.queryFrom
      // }).then(res => {
      //   const resData = res.data.result || []
      //   this.tableData = resData
      //   this.PAGING.total = res.data.total
      // })
    },
    // 新增
    addHandle () {
      this.$router.push('/commodity/add')
    },
    editMoadl (scoped) {
      this.drawerFlag = 0
      this.drawerTitle = '编辑'
      this.drawerWrapperClosable = false
      this.drawerWidth = '497px'
      // this.$refs.drawer.$data.drawerShow = true
      this.$refs.drawer.drawerOpen()
      // const { row } = scoped
      // debugger
      // this.$refs.drawer
    },
    toView (scoped) {
      this.drawerFlag = 1
      this.drawerTitle = '商品信息'
      this.drawerWrapperClosable = true
      this.drawerWidth = '510px'
      // this.$refs.drawer.$data.drawerShow = true
      this.$refs.drawer.drawerOpen()
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
    },
    off () {

    }
  }
}
</script>
<style lang="less" scoped>
@import "~@/common/styles/page-table";
.drawer-content-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 20px;
}
</style>
