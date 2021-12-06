<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-6">로그인</div>
            <v-text-field
              v-model="usermail"
              label="Usermail"
              clearable
              prepend-icon="mdi-email"
            />
            <v-text-field
              v-model="password"
              label="Password"
              clearable
              prepend-icon="mdi-lock-outline"
            />
            <v-btn class="mt-4" block x-large rounded color="primary"
              >Sign In</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignIn',

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
