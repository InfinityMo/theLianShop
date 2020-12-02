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
},
{
  dataKey: 'integral',
  title: '积分',
  width: 200
}, {
  dataKey: 'operate',
  title: '操作',
  width: 80,
  render: (h, scoped) => {
    return (
      <div>
        <span class="operate-span" onClick={() => $this.editMoadl(scoped)}>编辑</span>
      </div>
    )
  }
}]
