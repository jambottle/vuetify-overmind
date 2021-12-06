import Vue from 'vue';
import VueRouter from 'vue-router';

import AppLayout from '@/layouts/default/Index';
import AuthLayout from '@/layouts/auth/Index';
import PageLayout from '@/layouts/page/Index';

import Dashboard from '@/views/Dashboard';
// import SignUp from '@/views/auth/SignUp';
// import SignIn from '@/views/auth/SignIn';
import ProductList from '@/views/page/ProductList';

import GridSystem from '@/views/GridSystem';
import GridListPage from '@/views/GridListPage';
import Breakpoints from '@/views/Breakpoints';
import Typography from '@/views/Typography';

// import Tables from '@/views/Tables';
// import Forms from '@/views/Forms';
import Buttons from '@/views/Buttons';
import Icons from '@/views/Icons';

// import Test from '@/views/Test';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem,
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage,
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: Breakpoints,
      },
      {
        path: '/typography',
        name: 'Typography',
        component: Typography,
      },
      {
        path: '/tables/app-table',
        name: 'AppTable',
        component: () =>
          import(
            /* webpackChunkName: "views-tables" */ '@/views/tables/AppTable'
          ),
      },
      {
        path: '/tables/basic-table',
        name: 'BasicTable',
        component: () =>
          import(
            /* webpackChunkName: "views-tables" */ '@/views/tables/BasicTable'
          ),
      },
      {
        path: '/forms/app-form',
        name: 'AppForm',
        component: () =>
          import(/* webpackChunkName: "views-forms" */ '@/views/forms/AppForm'),
      },
      {
        path: '/forms/form-validation',
        name: 'FormValidation',
        component: () =>
          import(
            /* webpackChunkName: "views-forms" */ '@/views/forms/FormValidation'
          ),
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons,
      },
      {
        path: '/icons',
        name: 'Icons',
        component: Icons,
      },
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/Test'),
      },
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'signin',
        name: 'SignIn',
        component: () =>
          import(/* webpackChunkName: "views-auth" */ '@/views/auth/SignIn'),
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: () =>
          import(/* webpackChunkName: "views-auth" */ '@/views/auth/SignUp'),
      },
    ],
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
