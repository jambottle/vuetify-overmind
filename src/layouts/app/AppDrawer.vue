<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    v-bind="$attrs"
    :src="require('@/assets/sidebar.jpg')"
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
import { mapState } from "vuex";
import AppDrawerHeader from "./AppDrawerHeader.vue";
import AppDrawerList from "./AppDrawerList.vue";

export default {
  name: "AppDrawer",

  components: {
    AppDrawerHeader,
    AppDrawerList,
  },

  computed: {
    ...mapState("app", ["gradient", "items"]),
    drawer: {
      get() {
        return this.$store.getters["app/getDrawer"];
      },
      set(payload) {
        return this.$store.dispatch("app/toggleDrawer", payload);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
