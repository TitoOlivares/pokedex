<template>
  <v-container>
    <v-row align="center" justify="center" class="mt-6">
      <span class="ups">Uh-oh!</span>
    </v-row>
    <v-row align="center" justify="center" class="mt-6">
      <span class="description"> You look lost on your journey! </span>
    </v-row>
    <v-row align="center" justify="center" class="mt-10">
      <btn @click="backHome">Go back home</btn>
    </v-row>
  </v-container>
</template>

<script>
import Btn from "../components/ui/btn";

export default {
  name: "EmptyList",

  components: {
    Btn,
  },

  methods: {
    backHome() {
      window.location.href = "/";
    },
  },
};
</script>

<style>
.ups {
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #353535;
}

.description {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #5e5e5e;
}
</style>
