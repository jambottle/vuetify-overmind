<template>
  <v-card>
    <v-card-title>{{ title }}</v-card-title>
    <v-data-table v-bind="$attrs" v-on="$listeners" />
  </v-card>
</template>

<script>
export default {
  name: "DataTable",

  inheritAttrs: false,

  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
