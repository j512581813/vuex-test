import Vue from 'vue'
import Router from 'vue-router'


const Index = r =>require.ensure([],()=>r(require('../page/index.vue')),'index');
const Login = r =>require.ensure([],()=>r(require('../page/login.vue')),'login')
const Test = r =>require.ensure([],()=>r(require('../page/test.vue')),'test')




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
