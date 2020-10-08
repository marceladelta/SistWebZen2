import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
//import AdminPages from '@/components/admin/AdminPages'
//import ArticlesByCategory from '@/components/article/ArticlesByCategory'
//import ArticleById from '@/components/article/ArticleById'
//import Auth from '@/components/auth/Auth'

//import { userKey } from '@/global'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
}]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
