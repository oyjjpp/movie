import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import ShowText from '@/components/ShowText'
import ShowHTML from '@/components/ShowHTML'
import JSExpressionTest from '@/components/JSExpressionTest'
import Robot from '@/components/Robot'

Vue.use(Router)
Vue.use(VueResource)

// const routes = [
//   {
//     path: '/',
//     component: ressolve => require(['../pages/index'],  resolve),
//     meta: {
//       title: 'home'
//     }
//   },
// ]

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ShowText',
      component: ShowText
    },
    {
      path: '/ShowHtml',
      component: ShowHTML
    },
    {
      path: '/JSExpression',
      component: JSExpressionTest
    },
    {
      path: '/Robot',
      component: Robot
    }
  ]
})
