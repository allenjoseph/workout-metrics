import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap';

import AppVue from './App.vue';
import HomeVue from './components/Home.vue';
import WorkoutVue from './components/Workout.vue';
import TrendsVue from './components/Trends.vue';
import HistoryVue from './components/History.vue';

/**
 * Vue Router
 * https://router.vuejs.org/
 */
const router = new VueRouter({
  routes: [
    { path: '/', component: HomeVue },
    { path: '/workout', component: WorkoutVue },
    { path: '/trends', component: TrendsVue },
    { path: '/history', component: HistoryVue },
  ],
  linkActiveClass: 'active',
});

/**
 * Vue
 * https://vuejs.org/v2/guide/
 */
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: h => h(AppVue),
  router,
}).$mount('#app');
