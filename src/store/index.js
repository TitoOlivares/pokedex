import Vue from "vue";
import Vuex from "vuex";

import pokemon from "./pokemon";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    pokemon,
  },
});
