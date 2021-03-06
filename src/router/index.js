import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/install',
        name: 'install',
        component: () =>
            import ('../views/InstallView.vue')
    },
    {
        path: '/article',
        name: 'article',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/ArticleView.vue')
    },
    {
        path: '/cloud-image',
        name: 'cloud-image',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CloudImage.vue')
    },
    {
        path: '/cloud-hos',
        name: 'cloud-hos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/CloudHos.vue')
    },
    {
        path: '/cloud-account',
        name: 'cloud-account',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AccountView.vue')
    },
    {
        path: '/docs',
        name: 'docs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/DocView.vue')
    },
    {
        path: '/setting',
        name: 'setting',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SettingView.vue')
    },
    {
        path: '/signin',
        name: 'signin',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/SigninView.vue')
    }

]

const router = new VueRouter({
    routes
})

// ????????????
export function resetRouter() {
    const newRouter = new VueRouter({})
    router.matcher = newRouter.matcher // reset router
}

export default router