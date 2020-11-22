import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import QuizBeg from '@/pages/QuizBeg'
import AdminC from '@/pages/AdminCreateComp'
import AdminD from '@/pages/AdminDeleteComp'
import Admin from '@/pages/Admin'
import Home from '@/pages/Home'
import Summary from '@/pages/Summary'
import ShowRec from '@/pages/ShowRecommendation'
import InterSelection from '@/pages/InterSelection'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import LevelSelect from '@/pages/LevelSelect'
import AdminCp from '@/pages/AdminCompatibility'
import Expert from '@/pages/Expert'

Vue.use(Router)

export default new Router({
    mode: 'history',
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
            component: Admin,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/AdminC',
            name: 'AdminC',
            component: AdminC,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/AdminD',
            name: 'AdminD',
            component: AdminD,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/AdminCp',
            name: 'AdminCp',
            component: AdminCp,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next("/");
                } else {
                    next();
                }
            }
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
        {

            path: '/InterSelection',
            name: 'InterSelection',
            component: InterSelection
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        },
        {

            path: '/SignUp',
            name: 'SignUp',
            component: Register
        },
        {
            path: '/LevelSelect',
            name: 'LevelSelect',
            component: LevelSelect
        },
        {
            path: '/Expert',
            name: 'Expert',
            component: Expert
        },

    ]
})
