import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Tags from './views/Tags.vue';
import About from './views/About.vue';
import HighResolution from './views/HighResolution.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/tags', component: Tags },
    { path: '/about', component: About },
    { path: '/high_resolution', component: HighResolution },
    { path: '*', redirect: '/' },
  ],
});
