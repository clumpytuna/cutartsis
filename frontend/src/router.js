import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Random from './views/Random.vue';
import About from './views/About.vue';
import Donate from './views/Donate.vue';
import Debug from './views/Debug.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: Home },
    { path: '/random', component: Random },
    { path: '/about', component: About },
    { path: '/donate', component: Donate },
    { path: '/debug', component: Debug, meta: { hideToolbar: true } },
    { path: '*', redirect: '/' },
  ],
});
