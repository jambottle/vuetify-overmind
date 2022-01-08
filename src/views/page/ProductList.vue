<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="i in 20" :key="i" cols="12" sm="6" md="4" lg="3">
        <CardItem />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardItem from "@/components/product/CardItem";

export default {
  name: "ProductList",

  components: {
    CardItem,
  },
};
</script>

<style lang="scss" scoped></style>
