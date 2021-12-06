<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="$emit('drawer')" />
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style lang="scss" scoped></style>
