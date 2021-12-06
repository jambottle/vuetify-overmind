<template>
  <v-navigation-drawer
    app
    v-bind="$attrs"
    :src="require('@/assets/sidebar.jpg')"
    dark
  >
    <template v-slot:img="props">
      <v-img v-bind="props" :gradient="gradient" />
    </template>

    <AppDrawerHeader />

    <v-divider />

    <AppDrawerList :items="items" />
  </v-navigation-drawer>
</template>

<script>
import AppDrawerHeader from './AppDrawerHeader.vue';
import AppDrawerList from './AppDrawerList.vue';

export default {
  name: 'AppDrawer',

  components: {
    AppDrawerHeader,
    AppDrawerList,
  },

  data() {
    return {
      gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      items: [
        {
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/',
        },
        {
          title: 'Pages',
          icon: 'mdi-menu',
          items: [
            {
              title: 'Authentication',
              icon: 'mdi-key',
              items: [
                { title: 'Sign Up', icon: 'mdi-login', to: '/auth/signup' },
                { title: 'Sign In', icon: 'mdi-logout', to: '/auth/signin' },
              ],
            },
            {
              title: 'Product List',
              icon: 'mdi-reproduction',
              to: '/page/product-list',
            },
          ],
        },

        { title: 'Grid System', icon: 'mdi-image', to: '/grid-system' },
        { title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page' },
        { title: 'Breakpoints', icon: 'mdi-image', to: '/breakpoints' },
        { title: 'Typography', icon: 'mdi-image', to: '/typography' },

        { title: 'Tables', icon: 'mdi-table-settings', to: '/tables' },
        { title: 'Forms', icon: 'mdi-form-select', to: '/forms' },
        { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
        { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
