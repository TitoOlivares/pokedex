<template>
  <v-bottom-navigation
    color="primary"
    class="d-flex justify-center align-center"
    fixed
    height="80"
  >
    <btn
      @click="handleAll"
      class="mr-3"
      :width="'400'"
      :height="'34'"
      :color="route === 'list' ? 'primary' : 'inactive'"
    >
      <v-row align="center" class="d-flex">
        <v-img
          class="mr-2"
          width="12"
          height="12"
          src="../assets/list.svg"
        ></v-img>
        <span class="white--text">All</span>
      </v-row>
    </btn>
    <btn
      @click="handleFavs"
      class="ml-3"
      :width="'400'"
      :height="'34'"
      :color="route === 'favs' ? 'primary' : 'inactive'"
    >
      <v-row align="center" class="d-flex">
        <v-img
          class="mr-2"
          width="14"
          height="14"
          src="../assets/star.svg"
        ></v-img>
        <span class="white--text">Favorites</span>
      </v-row>
    </btn>
  </v-bottom-navigation>
</template>

<script>
import Btn from "../components/ui/Btn";

export default {
  components: {
    Btn,
  },

  methods: {
    handleAll() {
      this.$router.push("list");
    },
    handleFavs() {
      this.$router.push("favs");
    },
  },

  computed: {
    route() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
