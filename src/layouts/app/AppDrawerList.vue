<template>
  <v-list expand dense nav>
    <template v-for="(item, index) in items">
      <AppDrawerListGroup v-if="item.items" :key="`group-${index}`" :item="item" />
      <AppDrawerListItem v-else :key="`item-${index}`" :item="item" />
    </template>
  </v-list>
</template>

<script>
import AppDrawerListGroup from "./AppDrawerListGroup.vue";
import AppDrawerListItem from "./AppDrawerListItem.vue";

export default {
  name: "AppDrawerList",

  components: {
    AppDrawerListGroup,
    AppDrawerListItem,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped></style>
