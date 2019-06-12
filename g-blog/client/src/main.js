// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from './http'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'

// markdown 编辑器
import mavonEditor from 'mavon-editor'
import markdownitEmoji from 'markdown-it-emoji'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor);
mavonEditor.markdownIt.use(markdownitEmoji);

Axios.defaults.withCredentials = true;
Vue.prototype.axios = Axios;

Vue.use(ElementUI);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App)
})
