<template>
  <div class="container">
    <v-text-field
      v-model="search"
      solo
      color="default"
      label="Search"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-row v-if="pokemonList.length" class="mt-6">
      <v-col cols="12" v-for="(pokemon, i) in pokemonList" :key="i">
        <v-card
          height="60"
          @click="showPokemon(pokemon)"
          elevation="0"
          class="d-flex align-center justify-space-between py-3 px-6"
        >
          <span class="text-capitalize"> {{ pokemon.name }} </span>
          <v-btn icon @click="jojo">
            <img src="../assets/unselected.svg" alt="" />
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else>
      <empty-list />
    </v-row>
    <modal-detail />
    <v-bottom-navigation
      class="d-flex justify-center align-center"
      fixed
      height="80"
      v-model="value"
    >
      <btn class="mr-3" :width="'600'" :height="'44'" value="all">
        <v-row align="center" class="d-flex">
          <v-icon dark color="white darken-2" left>
            mdi-format-list-bulleted-square
          </v-icon>
          <span>All</span>
        </v-row>
      </btn>

      <btn
        @click="handleFavs"
        class="ml-3"
        :width="'600'"
        :height="'44'"
        value="favs"
      >
        <v-row align="center" class="d-flex">
          <v-icon dark color="white darken-2" left> mdi-star </v-icon>
          <span>Favorites</span>
        </v-row>
      </btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
import Btn from "../components/ui/btn";
import ModalDetail from "../components/ModalDetail";
import EmptyList from "../components/EmptyList";

export default {
  name: "PokeList",

  components: {
    Btn,
    ModalDetail,
    EmptyList,
  },

  data: () => ({
    value: "all",
  }),
  methods: {
    showPokemon(p) {
      this.$store.dispatch("getPokemon", p.name);
    },
    jojo() {
      console.log("cualquier cosa");
    },
    handleFavs() {
      this.$router.push("favs");
    },
  },
  beforeMount() {
    this.$store.dispatch("getPokemonList");
  },
  computed: {
    pokemonList() {
      return this.$store.getters.getShowingList;
    },
    search: {
      get() {
        return this.$store.getters.getFilter;
      },
      set(value) {
        this.$store.dispatch("setFilter", value);
      },
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 70%;
  padding-bottom: 80px;
}
.title {
  font-style: normal !important;
  font-weight: 700 !important;
  font-size: 36px !important;
  line-height: 43px !important;

  color: #353535;
}
@media (max-width: 800px) {
  .container {
    width: 90%;
  }
}
.v-text-field.v-text-field--solo:not(.v-text-field--solo-flat)
  > .v-input__control
  > .v-input__slot {
  box-shadow: none !important;
}
.theme--light.v-label {
  color: #bfbfbf !important;
}

.v-input .v-label {
  font-family: "Montserrat" sans-serif;
}

.theme--light.v-icon {
  color: #bfbfbf !important;
}

.theme--light.v-card {
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;

  color: #353535;
}

.v-sheet.v-card {
  border-radius: 5px !important;
}
</style>