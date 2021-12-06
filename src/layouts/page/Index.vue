<template>
  <v-app>
    <PageAppBar />
    <PageAppView />
  </v-app>
</template>

<script>
import PageAppBar from './AppBar.vue';
import PageAppView from './AppView.vue';

export default {
  name: 'PageLayout',

  components: {
    PageAppBar,
    PageAppView,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
