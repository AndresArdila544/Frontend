import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import QuizBeginner from '@/pages/QuizBeginner'
import AdminCreateComp from '@/pages/AdminCreateComp'
import AdminDeleteComp from '@/pages/AdminDeleteComp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/QuizB',
      name: 'QuizB',
      component: QuizBeginner
    },
    {
      path: '/Admin/Create',
      name: 'AdminCreate',
      component: AdminCreateComp
    },
    {
      path: '/Admin/Delete',
      name: 'AdminDelete',
      component: AdminDeleteComp
    }
  ]
})
