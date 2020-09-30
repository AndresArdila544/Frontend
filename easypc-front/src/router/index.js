import Vue from 'vue'
import Router from 'vue-router'
import QuizBeg from '@/pages/QuizBeg'
import AdminC from '@/pages/AdminCreateComp'
import AdminD from '@/pages/AdminDeleteComp'
import Admin from '@/pages/Admin'
import prueba from '@/pages/prueba'
import ListOfComponents from '@/pages/ListOfComponents'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: prueba
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
            path: '/ListOfComponents',
            name: 'ListOfComponents',
            component: ListOfComponents
        }

    ]
})
