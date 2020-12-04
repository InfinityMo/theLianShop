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
        <h4>积分列表</h4>
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
        <integral-edit v-if="drawerFlag===0"
                       @closeDrawer="closeDrawer"
                       :commodityId="commodity"></integral-edit>
        <integral-view v-else
                       :commodityId="commodity">
        </integral-view>
      </div>
    </drawer>
  </div>
</template>
<script>
import tableMixin from '@/mixins/dealTable'
import { columnsData } from './columnsData.js'
import { tableSearchForm } from './searchForm'
import integralEdit from './integralEdit'
import integralView from './integralView'
export default {
  mixins: [tableMixin],
  components: { integralEdit, integralView },
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
          userName: '张三',
          userNum: 'TL - 1563',
          userDept: '销售部',
          integral: 100
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
      this.drawerWidth = '400px'
      // this.$refs.drawer.$data.drawerShow = true
      this.$refs.drawer.drawerOpen()
      // const { row } = scoped
      // debugger
      // this.$refs.drawer
    },
    toView (scoped) {
      this.drawerFlag = 1
      this.drawerTitle = '积分变更记录'
      this.drawerWrapperClosable = true
      this.drawerWidth = '537px'
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
