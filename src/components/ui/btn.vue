<template>
  <v-btn
    tile
    :color="color"
    class="white--text letter-spacing-0"
    elevation="0"
    rounded
    :width="width"
    :height="height"
    @click="$emit('click')"
  >
    <slot />
  </v-btn>
</template>
<script>
export default {
  name: "UiBtn",
  props: {
    color: {
      type: String,
      default: "primary",
    },
    height: {
      type: String,
      default: "40",
    },
    width: {
      type: String,
      default: "160",
    },
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.v-btn {
  font-style: normal !important;
  font-weight: 700 !important;
  line-height: 22px !important;
  letter-spacing: 0 !important;
  text-transform: unset !important;
}

.v-btn--rounded {
  border-radius: 60px !important;
}
</style>
