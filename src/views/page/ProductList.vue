<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 20" :key="i" cols="12" sm="6" md="4" lg="3">
        <ItemList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ItemList from "@/components/product/ItemList";

export default {
  name: "ProductList",

  components: {
    ItemList,
  },
};
</script>

<style lang="scss" scoped></style>
