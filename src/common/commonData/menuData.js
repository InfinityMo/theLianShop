export default [
  {
    pId: '1',
    pTitle: '用户管理',
    icon: 'user',
    pPath: '/'
  },
  {
    pId: '2',
    pTitle: '商品管理',
    icon: 'commodity',
    children: [{
      path: '/commodity/add',
      title: '添加'
    }, {
      path: '/commodity/unreleased',
      title: '未发布'
    }, {
      path: '/commodity/released',
      title: '已发布'
    }, {
      path: '/commodity/off',
      title: '已下架'
    }
    ]
  },
  {
    pId: '3',
    pTitle: '订单管理',
    icon: 'order',
    pPath: '/order/orderManage'
  },
  {
    pId: '4',
    pTitle: '购物车管理',
    icon: 'shopCart',
    pPath: '/shop/cartManage'
  },
  {
    pId: '5',
    pTitle: '积分管理',
    icon: 'integral',
    pPath: '/integral/integralManage'
  }
]
