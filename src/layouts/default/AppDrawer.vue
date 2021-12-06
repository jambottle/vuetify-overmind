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

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Project Overmind
        </v-list-item-title>
        <v-list-item-subtitle>Medistream Admin Page</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
        active-class="primary"
        class="py-1"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DefaultAppDrawer',

  data() {
    return {
      gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        { title: 'Grid System', icon: 'mdi-image', to: '/grid-system' },
        { title: 'Grid List Page', icon: 'mdi-image', to: '/grid-list-page' },
        { title: 'Breakpoints', icon: 'mdi-image', to: '/breakpoints' },
        { title: 'Typography', icon: 'mdi-image', to: '/typography' },

        { title: 'Tables', icon: 'mdi-table-settings', to: '/tables' },
        { title: 'Forms', icon: 'mdi-form-select', to: '/forms' },
        { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons' },
        { title: 'Icons', icon: 'mdi-emoticon-excited-outline', to: '/icons' },

        { title: 'SignIn', icon: 'mdi-login', to: '/auth/signin' },
        { title: 'SignUp', icon: 'mdi-logout', to: '/auth/signup' },
        {
          title: 'ProductList',
          icon: 'mdi-reproduction',
          to: '/page/product-list',
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
