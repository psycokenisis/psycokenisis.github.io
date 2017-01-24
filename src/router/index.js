import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeView from './../views/HomeView';
import FormComponentsView from './../views/FormComponentsView';
import NotFoundView from './../views/NotFoundView';

const Dummy = { template: '<div>Dummy</div>' };
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',
      component: HomeView,
      meta: {
        title: 'psycokenisis.github.io',
      },
    },
    { path: '/components/form',
      component: FormComponentsView,
      meta: {
        title: 'Components',
      },
    },
    { path: 'dummy', component: Dummy },
    { path: '*', component: NotFoundView },
  ],
});

Vue.use(VueRouter);
export default router;
