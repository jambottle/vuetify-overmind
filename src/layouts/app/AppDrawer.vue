<template>
  <v-navigation-drawer
    app
    v-bind="$attrs"
    :src="require('@/assets/sidebar.jpg')"
    v-model="drawer"
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
import { mapState } from 'vuex';
import AppDrawerHeader from './AppDrawerHeader.vue';
import AppDrawerList from './AppDrawerList.vue';

export default {
  name: 'AppDrawer',

  components: {
    AppDrawerHeader,
    AppDrawerList,
  },

  computed: {
    ...mapState('app', ['gradient', 'items']),
    drawer: {
      get() {
        return this.$store.getters['app/getDrawer'];
      },
      set(value) {
        return this.$store.dispatch('app/toggleDrawer', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
