export const columnsData = (h, $this) => [{
  dataKey: '_index',
  title: '序号',
  align: 'center',
  width: 80
}, {
  dataKey: 'userNum',
  title: '工号',
  width: 250,
  render: (h, scoped, row) => {
    return (
      <div>
        <el-tooltip class="item" effect="dark" content={scoped.row.userNum} placement="top">
          <span class="view-title ell" onClick={() => $this.toView(scoped)}>{scoped.row.userNum}</span>
        </el-tooltip>
      </div>
    )
  }
}, {
  dataKey: 'userName',
  title: '姓名'
}, {
  dataKey: 'userDept',
  title: '部门'
}]
