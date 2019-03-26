import Vue from 'vue';
import Router from 'vue-router';
import Cuts from './views/Cuts.vue';
import Tags from './views/Tags.vue';
import About from './views/About.vue';
import HighResolution from './views/HighResolution.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    { path: '/', component: Cuts },
    { path: '/cut/:cut', component: Cuts, props: true },
    { path: '/tags', component: Tags },
    { path: '/tags/:selectedTag', component: Tags, props: true },
    { path: '/about', component: About },
    { path: '/high_resolution', component: HighResolution },
    { path: '*', redirect: '/' },
  ],
});
