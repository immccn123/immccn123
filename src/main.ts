import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Friend from './Friend.vue'
import Home from './Home.vue'
import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', component: Home },
    { path: '/links', component: Friend },
    { path: '/friends', component: Friend },
    { path: '/:catchAll(.*)', redirect: '/' }
]


const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})


createApp(App).use(router).mount('#app')
