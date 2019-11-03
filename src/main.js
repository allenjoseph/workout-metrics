import Vue from 'vue';
import VueRouter from 'vue-router';
import 'bootstrap';

import AppVue from './App.vue';
import DashboardVue from './components/Dashboard.vue';
import WorkoutVue from './components/workout/Workout.vue';
import TrendsVue from './components/Trends.vue';
import HistoryVue from './components/History.vue';

/**
 * Vue Router
 * https://router.vuejs.org/
 */
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/dashboard' },
    { path: '/dashboard', component: DashboardVue },
    { path: '/workout', component: WorkoutVue, name: 'Workout' },
    { path: '/trends', component: TrendsVue, name: 'Trends' },
    { path: '/history', component: HistoryVue, name: 'History' },
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
