import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import top from '@/components/top'
import last from '@/components/last'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/top',
      name: 'top',
      component: top
    },
    {
      path: '/last',
      component: last
    }
  ]
})
