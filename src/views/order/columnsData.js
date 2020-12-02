export const columnsData = (h, $this) => [{
  dataKey: '_index',
  title: '序号',
  align: 'center',
  width: 80
}, {
  dataKey: 'orderNo',
  title: '订单编号',
  width: 250,
  render: (h, scoped, row) => {
    return (
      <div>
        <el-tooltip class="item" effect="dark" content={scoped.row.orderNo} placement="top">
          <span class="view-title ell" onClick={() => $this.toView(scoped)}>{scoped.row.orderNo}</span>
        </el-tooltip>
      </div>
    )
  }
}, {
  dataKey: 'userNum',
  title: '工号'
}, {
  dataKey: 'userName',
  title: '姓名'
}, {
  dataKey: 'userDept',
  title: '部门'
},
{
  dataKey: 'orderAmount',
  title: '订单金额',
  width: 200
}, {
  dataKey: 'orderTime',
  title: '订单生成时间',
  width: 200
}]
