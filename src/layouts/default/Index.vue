<template>
  <v-app>
    <AppBar />
    <AppDrawer />
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
};
</script>

<style lang="scss" scoped></style>
