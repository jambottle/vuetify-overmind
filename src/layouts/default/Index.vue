<template>
  <v-app>
    <DefaultAppBar @drawer="drawer = !drawer" />
    <DefaultAppDrawer v-model="drawer" />
    <DefaultAppView />
  </v-app>
</template>

<script>
import DefaultAppBar from './AppBar.vue';
import DefaultAppDrawer from './AppDrawer.vue';
import DefaultAppView from './AppView.vue';

export default {
  name: 'DefaultLayout',

  components: {
    DefaultAppBar,
    DefaultAppDrawer,
    DefaultAppView,
  },

  data() {
    return {
      drawer: false,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
