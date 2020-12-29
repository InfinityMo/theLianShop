export const columnsData = (h, $this) => [{
  dataKey: '_index',
  title: '序号',
  align: 'center',
  width: 80
}, {
  dataKey: 'userNum',
  title: '工号',
  width: 250
}, {
  dataKey: 'userName',
  title: '姓名'
}, {
  dataKey: 'userStatus',
  title: '用户状态',
  render: (h, scoped) => {
    return (
      <div>
        <el-switch
          value={scoped.row.valid}
          onchange={() => $this.switchChange(scoped)}
          active-color="#409eff"
          inactive-color="#dcdfe6">
        </el-switch>
      </div>
    )
  }
}]
