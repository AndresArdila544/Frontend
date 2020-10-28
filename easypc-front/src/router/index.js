import Vue from 'vue'
import Router from 'vue-router'
import QuizBeg from '@/pages/QuizBeg'
import AdminC from '@/pages/AdminCreateComp'
import AdminD from '@/pages/AdminDeleteComp'
import Admin from '@/pages/Admin'
import Home from '@/pages/Home'
import Summary from '@/pages/Summary'
import ShowRec from '@/pages/ShowRecommendation'


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
            path: '/Admin',
            name: 'Admin',
            component: Admin
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
        },
        {
            path: '/ShowRec',
            name: 'ShowRec',
            component: ShowRec
        },
        {
            path: '/Summary',
            name: 'Summary',
            component: Summary
        },

    ]
})
