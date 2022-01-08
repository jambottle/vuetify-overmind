<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <ValidationObserver ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="signIn">
                <div class="text-h4 font-weight-black mb-6">로그인</div>

                <ValidationProvider
                  v-slot="{ errors }"
                  name="User E-Mail"
                  :rules="{ required: true }"
                >
                  <v-text-field
                    v-model="userMail"
                    label="User E-Mail"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </ValidationProvider>

                <ValidationProvider v-slot="{ errors }" name="Password" :rules="{ required: true }">
                  <v-text-field
                    v-model="password"
                    label="Password"
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
                  Sign In
                </v-btn>

                <div class="mt-5">
                  <router-link class="text-decoration-none" to="/">Home</router-link>
                  |
                  <router-link class="text-decoration-none" to="/auth/signup">
                    회원가입
                  </router-link>
                </div>
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
  name: "SignIn",

  data() {
    return {
      userMail: null,
      password: null,
    };
  },

  methods: {
    async signIn() {
      const result = await this.$refs.observer.validate();
      if (result) {
        alert("로그인 성공");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
