import Vue from 'vue'
import VueRouter from 'vue-router'
// 登录
const Login = () => import('../views/login')
// 首页
const Home = () => import('../views/home')
// 公共布局
const Layout = () => import('../layout')
// 组织架构
const Dept = () => import('../views/department')
const Detail = () => import('../views/home/detail.vue')
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/login',
  //   component: Login
  // },
  {
    path: '/',
    component: Login
  },
  // 登录之后页面 是layout公共的页面布局组件
  // 分层，为后面权限做铺垫----细腻
  {
    path: '/home',
    component: Layout,
    children: [{
      path: '/home',
      component: Home
    }
    ]
  },
  {
    path: '/department',
    component: Layout,
    children: [{
      path: '/department',
      component: Dept
    }]
  },
  // 其他
  {
    path: '/home/detail/:id',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
