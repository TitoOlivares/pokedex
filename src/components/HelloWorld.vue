<template>
  <v-container fill-height fluid v-if="loading">
    <loader />
  </v-container>
  <div v-else>
    <v-row>
      <v-col class="d-flex justify-center mt-6">
        <pikachu-image />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center mt-6">
        <span class="welcome">Welcome to Pokédex</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <span class="description mx-6">
          The digital encyclopedia created by Professor Oak is an invaluable
          tool <br />
          to Trainers in the Pokémon world.
        </span>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center mt-3">
        <btn color="primary" :width="'131'" :height="'44'" @click="redirect">
          Get Started
        </btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Loader from "./Loader.vue";
import Btn from "../components/ui/btn";
import PikachuImage from "./PikachuImage";

export default {
  name: "HelloWorld",

  components: {
    Loader,
    Btn,
    PikachuImage,
  },

  data: () => ({
    loading: false,
  }),

  methods: {
    redirect() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("list");
        this.loading = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
.welcome {
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #353535;
}

.description {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;

  text-align: center;

  color: #5e5e5e;
}
</style>
