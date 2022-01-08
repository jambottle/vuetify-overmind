<template>
  <label>
    {{ label }}
    <v-text-field
      class="mt-1"
      :outlined="outlined"
      :dense="dense"
      v-bind="$attrs"
      v-on="$listeners"
    />
  </label>
</template>

<script>
export default {
  name: "TextField",

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: null,
    },
    value: {
      type: String,
      default: null,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    dense: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
