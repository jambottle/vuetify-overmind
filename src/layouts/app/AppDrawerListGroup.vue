<template>
  <v-list-group :prepend-icon="item.icon">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>

    <template v-for="(child, index) in item.items">
      <AppDrawerListGroup v-if="child.items" :key="`sub-group-${index}`" :item="child" />
      <AppDrawerListItem v-else :key="`child=${index}`" :item="child" />
    </template>
  </v-list-group>
</template>

<script>
import AppDrawerListGroup from "./AppDrawerListGroup.vue";
import AppDrawerListItem from "./AppDrawerListItem.vue";

export default {
  name: "AppDrawerListGroup",

  components: {
    AppDrawerListGroup,
    AppDrawerListItem,
  },

  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped></style>
