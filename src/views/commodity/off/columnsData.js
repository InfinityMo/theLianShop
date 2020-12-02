export const columnsData = (h, $this) => [{
  dataKey: '_index',
  title: '序号',
  align: 'center',
  width: 80
}, {
  dataKey: 'commodityName',
  title: '商品名称',
  width: 250,
  render: (h, scoped, row) => {
    return (
      <div>
        <el-tooltip class="item" effect="dark" content={scoped.row.commodityName} placement="top">
          <span class="view-title ell" onClick={() => $this.toView(scoped)}>{scoped.row.commodityName}</span>
        </el-tooltip>
      </div>
    )
  }
}, {
  dataKey: 'price',
  title: '商品价格'
}, {
  dataKey: 'type',
  title: '商品类型'
}, {
  dataKey: 'limitNum',
  title: '限购数量'
},
{
  dataKey: 'offTime',
  title: '下架时间',
  width: 140
},
{
  dataKey: 'dateTime',
  title: '上/下架时间',
  width: 280
},
{
  dataKey: 'operate',
  title: '操作',
  width: 80,
  render: (h, scoped) => {
    return (
      <div>
        <el-popconfirm onOnConfirm={() => $this.deleteHandle(scoped)} placement="top" title="确定删除吗？">
          <span class="operate-span" slot="reference">删除</span>
        </el-popconfirm>
      </div>
    )
  }
}]
