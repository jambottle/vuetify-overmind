<template>
  <v-container>
    <v-card>
      <v-card-title>Typography</v-card-title>
      <v-card-text>
        <v-card class="pa-3 text-h2 primary lighten-5">Content</v-card>
        <v-card class="pa-3 text-h2 secondary darken-4">Content</v-card>
        <v-card class="pa-3 text-h2 error">Content</v-card>

        <v-card class="pa-3 text-h2 primary--text">Content</v-card>
        <v-card class="pa-3 text-h2 secondary--text">Content</v-card>
        <v-card class="pa-3 text-h2 error--text">Content</v-card>

        <v-card class="pa-3 text-h2" color="lime">Content</v-card>
        <v-card class="pa-3 text-h2 lime--text">Content</v-card>
      </v-card-text>

      <v-container class="grey lighten-3">
        <v-card class="pa-3 d-none d-sm-block" outlined>
          <p class="text-h1 pa-17">Heading 1</p>
          <p class="text-h2">Heading 2</p>
          <p class="text-h3 text-sm-subtitle-1">Heading 3</p>
          <!-- <p class="display-4">Display 4</p> -->

          <p class="font-weight-black">Black Text</p>
          <p class="font-weight-thin">Thin Text</p>

          <p class="text-justify">
            Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id,
            nulla. Fusce convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus
            quam, scelerisque ut, mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
            Praesent venenatis metus at tortor pulvinar varius. Donec venenatis vulputate lorem.
            Phasellus accumsan cursus velit. Pellentesque ut neque.
          </p>

          <p class="text-left">Left aligned text on all viewport sizes.</p>
          <p class="text-center text-sm-right">Center aligned text on all viewport sizes.</p>
          <p class="text-right">Right aligned text on all viewport sizes.</p>
        </v-card>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Typography",
};
</script>

<style lang="scss" scoped></style>
