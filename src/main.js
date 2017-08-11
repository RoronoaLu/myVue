// 导入 vue核心包
import Vue from 'vue';

// 导入App.vue 的vue对象

import App from './App.vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import home from './components/Home.vue';
import shopcar from './components/shopcar/car.vue';

// 导入 mint-ui 的 css
import 'mint-ui/lib/style.min.css';

import '../statics/mui/css/mui.css'

import '../statics/mui/css/icons-extra.css'

// 基础的 css 放到所有 css的最后
import '../statics/css/site.css'

import  mintui from 'mint-ui';
Vue.use(mintui);

var router1 = new VueRouter({
  linkActiveClass:'mui-active',
  routes:[
    {path:'/home',component:home},
    {path:'/shopcar',component:shopcar}
  ]
})

// 利用vue对象进行 解析 渲染

new Vue({
  el:'#app',
  router:router1,
  render: c => c(App)

})
