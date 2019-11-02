import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './components/Home.vue';

/**
 * Vue Router
 * https://router.vuejs.org/
 */
const router = new VueRouter({
  routes: [{ path: '/', component: Home }],
});

/**
 * Vue
 * https://vuejs.org/v2/guide/
 */
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
