import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/nprogress.css';
import NProgress from 'nprogress';

NProgress.configure({
  // speed: 1,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 100, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
})


router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});

//跳转结束了
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  setTimeout(() => {
    NProgress.done();
  }, 1000);
  // NProgress.done()
})

loadFonts();

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
