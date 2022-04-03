import { getPokemonList, getPokemon } from "../api/poke-api";

const initialState = {
  pokemonList: [],
  pokemon: {},
  showModal: false,
};

export const mutations = {
  setPokemonList(state, payload) {
    state.pokemonList = payload;
  },

  setPokemon(state, payload) {
    state.pokemon = payload;
  },

  setShowModal(state, payload) {
    state.showModal = payload;
  },
};

export const actions = {
  async getPokemonList({ commit }) {
    const pokemonList = await getPokemonList();
    commit("setPokemonList", pokemonList.results);
  },

  async getPokemon({ commit }, payload) {
    const pokemon = await getPokemon(payload);
    commit("setPokemon", pokemon);
    commit("setShowModal", true);
  },
};

export const getters = {
  getPokemonList(state) {
    return state.pokemonList;
  },

  getPokemon(state) {
    return state.pokemon;
  },

  getPokemonImage(state) {
    return state.pokemon.sprites.other["official-artwork"].front_default;
  },

  getTypes(state) {
    let types = [];
    state.pokemon.types.map((t) => {
      types.push(t.type.name);
    });
    return types;
  },

  getShowModal(state) {
    return state.showModal;
  },
};
export default {
  state: { ...initialState },
  actions,
  mutations,
  getters,
};
