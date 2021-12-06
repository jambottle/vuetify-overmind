<template>
  <v-app>
    <PageBar />
    <PageView />
  </v-app>
</template>

<script>
import PageBar from './PageBar.vue';
import PageView from './PageView.vue';

export default {
  name: 'PageLayout',

  components: {
    PageBar,
    PageView,
  },
};
</script>

<style lang="scss" scoped></style>
