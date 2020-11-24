import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import QuizBeg from '@/pages/QuizBeg'
import AdminC from '@/pages/AdminCreateComp'
import AdminD from '@/pages/AdminDeleteComp'
import Admin from '@/pages/Admin'
import Home from '@/pages/Home'
import Summary from '@/pages/Summary'

import InterSelection from '@/pages/InterSelection'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import LevelSelect from '@/pages/LevelSelect'
import AdminCp from '@/pages/AdminCompatibility'
import Expert from '@/pages/Expert'
import ChangePassword from '@/pages/ChangePassword'

import UserOptions from '@/pages/UserOptions'
import UserBuilds from '@/pages/UserBuilds'



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
                if(store.state.authenticated == false || store.state.role != "admin") {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: UserOptions,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/MyBuilds',
            name: 'MyBuilds',
            component: UserBuilds,
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
                if(store.state.authenticated == false || store.state.role != "admin") {
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
                if(store.state.authenticated == false || store.state.role != "admin") {
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
                if(store.state.authenticated == false || store.state.role != "admin" ) {
                    next("/");
                } else {
                    next();
                }
            }
        },

        {
            path: '/Summary',
            name: 'Summary',
            component: Summary,
            beforeEnter: (to, from, next) => {
                if(store.state.InterIDBuild != -1 || store.state.a3 != '') {

                    next();
                } else {

                    next("/");
                }
            }
        },
        {

            path: '/InterSelection',
            name: 'InterSelection',
            component: InterSelection
        },
        {

            path: '/Expert',
            name: 'Expert',
            component: Expert
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == true ) {
                    next("/");
                } else {
                    next();
                }
            }
            
        },
        {

            path: '/SignUp',
            name: 'SignUp',
            component: Register,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == true ) {
                    next("/");
                } else {
                    next();
                }
            }
        },
        {
            path: '/LevelSelect',
            name: 'LevelSelect',
            component: LevelSelect
        },
        {
            path: '/ChangePassword',
            name: 'ChangePassword', 
            component: ChangePassword,
            beforeEnter: (to, from, next) => {
                if(store.state.authenticated == false) {
                    next("/");
                } else {
                    next();
                }
            }
        }

    ]
})
