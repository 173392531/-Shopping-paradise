// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 element-ui

// a.1 引入element-ui模块

import ElementUI from 'element-ui';

// a.2 引入element-ui css 样式

import 'element-ui/lib/theme-chalk/index.css';

// a.3 在Vue中注册使用 ElementUI 模块

Vue.use(ElementUI); 

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
