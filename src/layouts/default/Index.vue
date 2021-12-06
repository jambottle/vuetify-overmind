<template>
  <v-app>
    <AppBar @drawer="drawer = !drawer" />
    <AppDrawer v-model="drawer" />
    <AppView />
  </v-app>
</template>

<script>
import AppBar from './AppBar.vue';
import AppDrawer from './AppDrawer.vue';
import AppView from './AppView.vue';

export default {
  name: 'AppLayout',

  components: {
    AppBar,
    AppDrawer,
    AppView,
  },

  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
