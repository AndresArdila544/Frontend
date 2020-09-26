import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import QuizBeg from '@/pages/QuizBeg'
import AdminC from '@/pages/AdminCreateComp'
import AdminD from '@/pages/AdminDeleteComp'

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
            component: QuizBeg
        },
        {
            path: '/AdminC',
            name: 'AdminC',
            component: AdminC
        },
        {
            path: '/AdminD',
            name: 'AdminD',
            component: AdminD
        }
    ]
})
