<template>
  <v-container>
    <v-text-field
      solo
      color="default"
      label="Search"
      style=""
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <div class="lala">You look lost on your journey!</div>
  </v-container>
</template>

<script>
export default {
  name: "PokeSearch",
};
</script>

<style>
.lala {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #5e5e5e;
}
</style>
