<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-spacer />
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
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
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
        {
          title: 'Grid System',
          icon: 'mdi-image',
          to: '/grid-system',
        },
        {
          title: 'Grid List Page',
          icon: 'mdi-image',
          to: '/grid-list-page',
        },
        {
          title: 'Breakpoints',
          icon: 'mdi-image',
          to: '/breakpoints',
        },
      ],
      right: null,
    };
  },
};
</script>
