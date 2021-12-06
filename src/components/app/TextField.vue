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
  name: 'AppTextField',

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

  // created() {
  //   console.log('this.$attrs: ', this.$attrs);
  //   console.log('this.$listeners: ', this.$listeners);
  // },
};
</script>

<style lang="scss" scoped></style>
