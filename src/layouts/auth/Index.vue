<template>
  <v-app>
    <AuthView />
  </v-app>
</template>

<script>
import AuthView from "./AuthView.vue";

export default {
  name: "AuthLayout",

  components: {
    AuthView,
  },
};
</script>

<style lang="scss" scoped></style>
