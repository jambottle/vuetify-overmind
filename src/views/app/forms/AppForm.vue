<template>
  <v-container fluid>
    <v-card>
      <v-card-text>
        <TextField
          v-model="customValue"
          :counter="10"
          label="이름"
          placeholder="여기에 입력해주세요."
        />

        <TextField
          v-model="customValue"
          :counter="10"
          label="나이"
          placeholder="여기에 입력해주세요."
        />

        <TextField
          v-model="customValue"
          :counter="10"
          label="닉네임"
          placeholder="여기에 입력해주세요."
        />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import TextField from "@/components/app/TextField";

export default {
  name: "AppForm",

  components: {
    TextField,
  },

  data() {
    return {
      customValue: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
