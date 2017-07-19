import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)
const routes = [{
        path: '/',
        redirect: '/login',
    }, {
        path: '/Home',
        component: resolve => require(['../components/common/Index.vue'], resolve),
        meta: { requireAuth: true }, // 添加该字段，表示进入这个路由是需要登录的
        children: [{
                path: '/',
                component: resolve => require(['../components/Xpage/Home/Index.vue'], resolve)
            },
            {
                path: '/Address',
                component: resolve => require(['../components/Xpage/Home/Address.vue'], resolve)
            },
            {
                path: '/Find',
                component: resolve => require(['../components/Xpage/Find/Index.vue'], resolve)
            },
            {
                path: '/Order',
                component: resolve => require(['../components/Xpage/Order/Index.vue'], resolve)
            }, {
                path: '/MySelf',
                component: resolve => require(['../components/Xpage/MySelf/Index.vue'], resolve)
            }
        ]
    },
    {
        path: '/NormalLogin',
        component: resolve => require(['../components/common/NormalLogin.vue'], resolve)
    }, {
        path: '/login',
        component: resolve => require(['../components/common/Login.vue'], resolve)
    }
]

//定义
const router = new Router({
    routes
});

//拦截
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth)) {
        console.log("需要登录");
        //判断Token
        if (store.state.token) //需要引入store
        {
            next();
        } else {
            //Token失效
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next();
    }
})
export default router;