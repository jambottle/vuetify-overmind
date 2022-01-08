<template>
  <v-container fluid>
    <v-card>
      <v-card-title>Form Validation</v-card-title>
      <v-card-text>
        <ValidationObserver ref="observer" v-slot="{ invalid }">
          <v-form @submit.prevent="submit">
            <ValidationProvider v-slot="{ errors }" name="User Name" rules="required|max:10">
              <v-text-field
                v-model="userName"
                label="User Name"
                :counter="10"
                :error-messages="errors"
              />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="User E-Mail"
              :rules="{
                required: true,
                email: true,
              }"
            >
              <v-text-field v-model="userMail" label="User E-Mail" :error-messages="errors" />
            </ValidationProvider>

            <ValidationProvider
              v-slot="{ errors }"
              name="Phone Number"
              :rules="{
                required: true,
                numeric: true,
                digits: 11,
              }"
            >
              <v-text-field
                v-model="phoneNumber"
                label="Phone Number"
                :counter="11"
                :error-messages="errors"
              />
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors }" name="Select Item" :rules="{ required: true }">
              <v-select
                v-model="selectItem"
                label="Select Item"
                :items="selectItems"
                :error-messages="errors"
              />
            </ValidationProvider>

            <ValidationProvider v-slot="{ errors }" name="Checkbox" :rules="{ required: true }">
              <v-checkbox v-model="checkbox" label="Checkbox" value="1" :error-messages="errors" />
            </ValidationProvider>

            <v-btn class="mr-4" color="primary" type="submit" :disabled="invalid">Submit</v-btn>
            <v-btn @click="clear">Clear</v-btn>
          </v-form>
        </ValidationObserver>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "FormValidation",

  data() {
    return {
      userName: "",
      userMail: "",
      phoneNumber: "",
      selectItems: [
        { text: "item1", value: 1 },
        { text: "item2", value: 2 },
        { text: "item3", value: 3 },
      ],
      selectItem: null,
      checkbox: null,
    };
  },

  methods: {
    submit() {
      this.$refs.observer.validate().then((result) => {
        console.log("result: ", result);
        if (result) {
          alert("양식 제출");
        }
      });
    },
    clear() {
      this.userName = "";
      this.userMail = "";
      this.phoneNumber = "";
      this.selectItem = null;
      this.checkbox = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
