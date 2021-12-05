<template>
  <v-container>
    <v-card class="pa-3">
      <v-row>
        <v-col cols="auto">
          <v-btn color="primary">Primary</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="secondary">Secondary</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="success">Success</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn color="error">Error</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Buttons',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
