<template>
  <div class="page">
    <div class="search-wrap">
      <el-form class="demo-form-inline"
               :model="searchForm"
               id="form"
               ref="searchForm">
        <el-col :span="7">
          <el-form-item label="工号："
                        label-width="45px"
                        prop="userNum">
            <el-input placeholder="请输入工号"
                      v-model="searchForm.userNum"
                      clearable>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="姓名："
                        label-width="80px"
                        prop="userName">
            <el-input placeholder="请输入姓名"
                      v-model="searchForm.userName"
                      clearable>
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="状态："
                        label-width="80px"
                        prop="status">
            <el-select v-model="searchForm.status"
                       placeholder="请选择状态">
              <el-option v-for="item in status"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="3">
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
        <h4>用户列表</h4>
      </div>
      <standard-table :dataSource="tableData"
                      :columns="columns"
                      :pagination="PAGING"
                      @tableChange="tableChange" />
    </div>
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
      drawerFlag: 0, // 0是编辑，1是查看
      drawerShow: false,
      drawerWrapperClosable: false,
      drawerTitle: '编辑',
      commodity: '',
      drawerWidth: '497px',
      status: [{
        value: 3,
        label: '全部'
      }, {
        value: 1,
        label: '启用'
      }, {
        value: 0,
        label: '禁用'
      }]
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
          id: i,
          orderNo: 'UDDFSHF723143312315',
          userName: '张三',
          userNum: 'TL - 1563',
          valid: true
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
    switchChange (scoped) {
      const { row } = scoped
      const target = this.tableData.filter(i => i.id === row.id)
      target[0].valid = !target[0].valid
    },
    // 新增
    addHandle () {
      this.$router.push('/commodity/add')
    },
    toView (scoped) {
      this.drawerFlag = 1
      this.drawerTitle = '购物车'
      this.drawerWrapperClosable = true
      this.drawerWidth = '410px'
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
    closeDrawer () {
      this.$confirm('还有未保存的编辑，确定关闭吗？', '提示', {
        customClass: 'drawer-message-box'
      }).then(_ => {
        this.$refs.drawer.$data.drawerShow = false
      }).catch(_ => { })
      // this.$refs.drawer.$data.drawerShow = false
      // this.$refs.drawer.drawerClose()
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
