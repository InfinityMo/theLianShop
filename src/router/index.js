import Vue from 'vue'
import VueRouter from 'vue-router'
import baseLayout from '@/layouts/baseLayout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'User',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/userManage',
    children: [
      {
        path: 'userManage',
        name: 'UserManage',
        meta: { title: '用户管理' },
        component: () => import('@/views/user/index.vue')
      }
    ]
  },
  {
    path: '/commodity',
    name: 'Commodity',
    meta: { title: '商品管理' },
    component: baseLayout,
    redirect: '/add',
    children: [
      {
        path: 'add',
        name: 'Add',
        meta: { title: '添加' },
        component: () => import('@/views/commodity/add/index.vue')
      }, {
        path: 'unreleased',
        name: 'Unreleased',
        meta: { title: '未发布' },
        component: () => import('@/views/commodity/unreleased/index.vue')
      }, {
        path: 'released',
        name: 'Released',
        meta: { title: '已发布' },
        component: () => import('@/views/commodity/released/index.vue')
      }, {
        path: 'off',
        name: 'Off',
        meta: { title: '已下架' },
        component: () => import('@/views/commodity/off/index.vue')
      }
    ]
  },
  {
    path: '/order',
    name: 'Order',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/orderManage',
    children: [
      {
        path: 'orderManage',
        name: 'OrderManage',
        meta: { title: '订单管理' },
        component: () => import('@/views/order/index.vue')
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shop',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/cartManage',
    children: [
      {
        path: 'cartManage',
        name: 'CartManage',
        meta: { title: '购物车管理' },
        component: () => import('@/views/cart/index.vue')
      }
    ]
  },
  {
    path: '/integral',
    name: 'Integral',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/integralManage',
    children: [
      {
        path: 'integralManage',
        name: 'IntegralManage',
        meta: { title: '积分管理' },
        component: () => import('@/views/integral/index.vue')
      }
    ]
  },
  {
    path: '/check',
    name: 'Check',
    meta: { title: '' },
    component: baseLayout,
    redirect: '/checkManage',
    children: [
      {
        path: 'checkManage',
        name: 'CheckManage',
        meta: { title: '考勤免签管理' },
        component: () => import('@/views/check/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'forbidden',
    component: () => import('@/views/401/index.vue')
  },
  {
    path: '*',
    name: 'None',
    component: () => import('@/views/404/index.vue')
  }
]

const router = new VueRouter({
  routes
})
// 捕获路由异常
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
export default router
