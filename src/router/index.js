import Vue from 'vue';
import VueRouter from 'vue-router';

import AppLayout from '@/layouts/app/Index';
import Dashboard from '@/views/app/Dashboard';
import GridSystem from '@/views/app/GridSystem';
import GridListPage from '@/views/app/GridListPage';
import Breakpoints from '@/views/app/Breakpoints';
import Typography from '@/views/app/Typography';
import Buttons from '@/views/app/Buttons';
import Icons from '@/views/app/Icons';

import AuthLayout from '@/layouts/auth/Index';
import PageLayout from '@/layouts/page/Index';
import ProductList from '@/views/page/ProductList';

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
            /* webpackChunkName: "views-tables" */ '@/views/app/tables/AppTable'
          ),
      },
      {
        path: '/tables/basic-table',
        name: 'BasicTable',
        component: () =>
          import(
            /* webpackChunkName: "views-tables" */ '@/views/app/tables/BasicTable'
          ),
      },
      {
        path: '/forms/app-form',
        name: 'AppForm',
        component: () =>
          import(
            /* webpackChunkName: "views-forms" */ '@/views/app/forms/AppForm'
          ),
      },
      {
        path: '/forms/form-validation',
        name: 'FormValidation',
        component: () =>
          import(
            /* webpackChunkName: "views-forms" */ '@/views/app/forms/FormValidation'
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
        component: () => import('@/views/app/Test'),
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
