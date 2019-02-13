import Vue from 'vue';
import Router from 'vue-router';

import blogRoutes from './blog';

Vue.use(Router);

const defaultRoutes = [
  {
    path: '/',
    name: '',
    redirect: '/blog/digest'
  }
];

const routes = defaultRoutes.concat(blogRoutes);

export default new Router({
  routes: routes
})
