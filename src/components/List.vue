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
      <v-col
        cols="12"
        lg="6"
        md="12"
        v-for="(pokemon, i) in pokemonList"
        :key="i"
      >
        <v-card
          @click="showPokemon(pokemon)"
          elevation="0"
          class="d-flex align-center justify-space-between py-3 px-6"
        >
          <span>
            <img
              width="60"
              height="60"
              :src="imageUrl + pokeId(pokemon) + '.png'"
              alt=""
            />
          </span>
          <span class="text-capitalize">
            {{ pokemon.name }}
          </span>
          <v-btn icon @click.native.stop="favorite(pokemon.name)">
            <img :src="star(pokemon.name) ? active : inactive" alt="" />
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-pagination
          class="mt-3 text-center"
          v-model="page"
          :length="Math.ceil(count / 20)"
          :total-visible="7"
          @input="updatePage"
          circle
        ></v-pagination>
      </v-col>
    </v-row>
    <v-row v-else-if="loading">
      <loader />
    </v-row>
    <v-row v-else>
      <empty-list />
    </v-row>
    <modal-detail />
  </div>
</template>

<script>
import ModalDetail from "../components/ModalDetail";
import EmptyList from "../components/EmptyList";
import Loader from "./ui/Loader.vue";

export default {
  name: "PokeList",

  components: {
    ModalDetail,
    EmptyList,
    Loader,
  },

  props: {
    pokemonList: {
      type: Array,
      required: true,
    },
    list: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    inactive: require("../assets/unselected.svg"),
    active: require("../assets/selected.svg"),
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
  }),

  methods: {
    showPokemon(poke) {
      this.$store.dispatch("getPokemon", poke.name);
    },
    favorite(poke) {
      this.$store.dispatch("setFav", poke);
    },
    star(poke) {
      if (this.pokemonFavs.includes(poke)) {
        return true;
      }
      return false;
    },
    pokeId(poke) {
      return poke.url
        .split("/")
        .filter(function (part) {
          return !!part;
        })
        .pop();
    },
    updatePage(index) {
      this.$store.dispatch("setPage", index);
      this.$store.dispatch("getPokemonList", this.offset);
    },
  },
  computed: {
    search: {
      get() {
        if (this.list === "favs") {
          return this.$store.getters.getAllFavsFilter;
        }
        return this.$store.getters.getAllFilter;
      },
      set(value) {
        if (this.list === "favs") {
          this.$store.dispatch("setFavsFilter", value);
        } else {
          this.$store.dispatch("setAllFilter", value);
        }
      },
    },
    pokemonFavs() {
      return this.$store.getters.getFavs;
    },
    loading() {
      return this.$store.getters.getLoading;
    },
    count() {
      return this.$store.getters.getCount;
    },
    offset() {
      return (this.page - 1) * 20;
    },
    page() {
      return this.$store.getters.getPage;
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
