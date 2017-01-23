import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './../views/HomeView';
import NotFoundView from './../views/NotFoundView';

const Dummy = { template: '<div>Dummy</div>' };
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: HomeView },
    { path: 'dummy', component: Dummy },
    { path: '*', component: NotFoundView },
  ],
});

Vue.use(VueRouter);
export default router;
