import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import List from '@/components/list'
import Detail from '@/components/detail'
import Backstage from '@/components/backstage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/list',
      name: 'List',
      component: List
    }, {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }, {
      path: '/backstage',
      name: 'Backstage',
      component: Backstage
    }
  ]
})
