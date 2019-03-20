import Vue from 'vue';
import Router from 'vue-router';
import Cuts from './views/Cuts.vue';
import CutsForTag from './views/CutsForTag.vue';
import Tags from './views/Tags.vue';
import About from './views/About.vue';
import HighResolution from './views/HighResolution.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Cuts },
    { path: '/cut/:cut', component: Cuts, props: true },
    { path: '/tags', component: Tags },
    { path: '/tags/:tag', component: CutsForTag, props: true },
    { path: '/about', component: About },
    { path: '/high_resolution', component: HighResolution },
    { path: '*', redirect: '/' },
  ],
});
