<template>
  <v-container>
    <list :pokemon-list="pokemonList" :list="'favs'" />
  </v-container>
</template>

<script>
import List from "../components/List";

export default {
  components: {
    List,
  },

  beforeMount() {
    this.$store.dispatch("getPokemonList");
  },

  computed: {
    pokemonList() {
      return this.$store.getters.getShowingFavsList;
    },
    pokemonFavs() {
      return this.$store.getters.getFavs;
    },
  },
};
</script>

<style></style>
