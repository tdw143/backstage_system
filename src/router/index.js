import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from 'components/Login'
const Login = () => import('../views/login/Login')
const Home = () => import('../views/home/Home')
const Welcome = () => import('../views/home/welcome/Welcome')
const Users = () => import('../views/home/users/Users')
const Rights = () => import('../views/home/power/Rights')
const Roles = () => import('../views/home/power/Roles')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/rights',
      component: Rights
    },
    {
      path: '/roles',
      component: Roles
    }
  ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if(to.path === '/login') return next()

  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')
  next()
})

export default router
