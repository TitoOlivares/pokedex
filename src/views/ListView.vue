<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <list :pokemon-list="pokemonList" :list="'all'" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "../components/List";

export default {
  name: "ListView",

  components: {
    List,
  },

  beforeMount() {
    this.$store.dispatch("getPokemonList");
  },

  computed: {
    pokemonList() {
      return this.$store.getters.getShowingList;
    },
    pokemonFavs() {
      return this.$store.getters.getFavs;
    },
  },
};
</script>
