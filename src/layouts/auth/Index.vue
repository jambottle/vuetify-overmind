<template>
  <v-app>
    <AuthAppView />
  </v-app>
</template>

<script>
import AuthAppView from './AppView.vue';

export default {
  name: 'AuthLayout',

  components: {
    AuthAppView,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
