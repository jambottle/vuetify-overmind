<template>
  <v-list-item>
    <v-list-item-avatar style="border-radius: 0">
      <v-img :src="require('@/assets/logo.png')" />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title class="text-h6">Project Overmind</v-list-item-title>
      <v-list-item-subtitle>Medistream Admin Page</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "AppDrawerHeader",
};
</script>

<style lang="scss" scoped></style>
