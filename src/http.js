import axios from 'axios'
import store from './store/index'
import * as types from './store/mutation-types'
import router from './router'
import { Message } from 'element-ui'
// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://api.github.com';

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = 'Bearer ' + store.state.token;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                default:
                    Message.error(error.response.data.Message); //需引入element-ui
                    break;
            }
        }
        return Promise.reject(error.response.data)
    });

export default axios;