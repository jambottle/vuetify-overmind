<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="$emit('drawer')" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'DefaultAppBar',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
