<template>
  <v-row justify="center">
    <v-dialog v-if="showModal" v-model="showModal" persistent width="50%">
      <v-card elevation="0">
        <v-card-title class="pa-0 d-flex">
          <img
            @click="close"
            class="close"
            src="../assets/close.svg"
            height="20"
          />
          <v-img
            class="d-flex align-center text-center"
            src="../assets/modal-background.svg"
            max-height="200"
          >
            <img :src="pokemonImage" width="180" height="180" />
          </v-img>
        </v-card-title>
        <v-card-text>
          <v-row class="my-4 ml-0" align="center">
            <span class="key">Name:&nbsp;</span>
            <span class="text-capitalize">{{ pokemon.name }}</span>
          </v-row>
          <v-divider class="mt-3"></v-divider>
          <v-row class="my-4 ml-0" align="center">
            <span class="key"> Weight:&nbsp; </span>
            {{ pokemon.weight }}
          </v-row>
          <v-divider class="mt-3"></v-divider>
          <v-row class="my-4 ml-0" align="center">
            <span class="key"> Height:&nbsp; </span>
            {{ pokemon.height }}
          </v-row>
          <v-divider class="mt-3"></v-divider>
          <v-row class="my-4 ml-0" align="center">
            <span class="key">Types:&nbsp;</span>
            <span class="text-capitalize"> {{ getTypes.join(", ") }} </span>
          </v-row>
          <v-divider class="mt-3"></v-divider>
          <v-row class="mt-6 mb-1 d-flex justify-space-between">
            <v-col>
              <btn @click="copy"> Share to my friends </btn>
            </v-col>
            <v-col class="d-flex justify-end">
              <v-btn icon @click.native.stop="favorite(pokemon.name)">
                <img :src="star(pokemon.name) ? active : inactive" alt="" />
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
        <input type="hidden" id="copy" :value="textToCopy" />
        <v-snackbar
          transition="scroll-y-reverse-transition"
          elevation="0"
          class="mb-6 d-flex justify-content"
          :timeout="1000"
          v-model="snackbar"
          color="primary"
          absolute
          rounded="pill"
        >
          <span>Copied!</span>
        </v-snackbar>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Btn from "../components/ui/Btn";

export default {
  components: {
    Btn,
  },

  data: () => ({
    types: [],
    inactive: require("../assets/unselected.svg"),
    active: require("../assets/selected.svg"),
    snackbar: false,
  }),

  computed: {
    showModal() {
      return this.$store.getters.getShowModal;
    },
    pokemon() {
      return this.$store.getters.getPokemon;
    },
    pokemonImage() {
      return this.$store.getters.getPokemonImage;
    },
    getTypes() {
      return this.$store.getters.getTypes;
    },
    pokemonFavs() {
      return this.$store.getters.getFavs;
    },
    textToCopy() {
      return `${this.pokemon.name.toUpperCase()}, Weight: ${
        this.pokemon.weight
      }, Height: ${this.pokemon.height}, Types: ${this.getTypes.join(", ")}`;
    },
  },
  methods: {
    close() {
      this.$store.commit("setShowModal", false);
    },

    favorite(poke) {
      this.$store.commit("setFav", poke);
    },

    star(poke) {
      if (this.pokemonFavs.includes(poke)) {
        return true;
      }
      return false;
    },
    copy() {
      const urlToCopyInput = document.querySelector("#copy");
      urlToCopyInput.setAttribute("type", "text");
      urlToCopyInput.select();
      document.execCommand("copy");
      urlToCopyInput.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
      this.snackbar = true;
    },
  },
};
</script>

<style>
.close {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  cursor: pointer;
}

.key {
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
}
</style>
