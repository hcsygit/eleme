// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'; //引入Vuex状态管理
import axios from './http';
import ElementUI from 'element-ui';
import MintUI from 'mint-ui';
import VueValidator from 'vue-validator'; //表单验证
import 'mint-ui/lib/style.css';


Vue.config.productionTip = false

Vue.use(ElementUI); //使用
Vue.use(MintUI); //使用
Vue.use(VueValidator)
    /* eslint-disable no-new */
var FM = new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app');