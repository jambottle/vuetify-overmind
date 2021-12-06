<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <router-link to="/">
          <v-img
            class="mx-auto mb-4"
            width="100"
            :src="require('@/assets/logo.png')"
          />
        </router-link>

        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="signUp">
                <div class="text-h4 font-weight-black mb-6">회원가입</div>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="User E-Mail"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="usermail"
                    label="User E-Mail"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Password"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="password_1st"
                    label="Password"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </ValidationProvider>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="Confirm Password"
                  :rules="{
                    required: true,
                    confirmed: 'Password',
                  }"
                >
                  <v-text-field
                    v-model="password_2nd"
                    label="Confirm Password"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </ValidationProvider>

                <v-btn
                  class="mt-4"
                  block
                  x-large
                  rounded
                  color="primary"
                  type="submit"
                  :disabled="invalid"
                >
                  Sign Up
                </v-btn>
              </v-form>
            </ValidationObserver>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignUp',

  data() {
    return {
      usermail: null,
      password_1st: null,
      password_2nd: null,
    };
  },

  methods: {
    async signUp() {
      const result = await this.$refs.observer.validate();
      if (result) {
        alert('회원가입 성공');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
