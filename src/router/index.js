import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultLayout from '@/layouts/default/Index';
import PageLayout from '@/layouts/page/Index';
import AuthLayout from '@/layouts/auth/Index';

import Dashboard from '@/views/Dashboard';
import GridSystem from '@/views/GridSystem';
import GridListPage from '@/views/GridListPage';
import Breakpoints from '@/views/Breakpoints';
import Typography from '@/views/Typography';

import Tables from '@/views/Tables';
import Forms from '@/views/Forms';
import Buttons from '@/views/Buttons';
import Icons from '@/views/Icons';

import SignIn from '@/views/auth/SignIn';
import SignUp from '@/views/auth/SignUp';
import ProductList from '@/views/page/ProductList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
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
        path: '/tables',
        name: 'Tables',
        component: Tables,
      },
      {
        path: '/forms',
        name: 'Forms',
        component: Forms,
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
    ],
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: 'signin',
        name: 'SignIn',
        component: SignIn,
      },
      {
        path: 'signup',
        name: 'SignUp',
        component: SignUp,
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
