import { getPokemonList, getPokemon } from "../api/poke-api";

const initialState = {
  pokemonList: [],
  showingList: [],
  pokemon: {},
  showModal: false,
  filter: "",
};

export const mutations = {
  setPokemonList(state, payload) {
    state.pokemonList = payload;
  },

  setShowingList(state, payload) {
    state.showingList = payload;
  },

  setPokemon(state, payload) {
    state.pokemon = payload;
  },

  setShowModal(state, payload) {
    state.showModal = payload;
  },

  setFilter(state, payload) {
    state.filter = payload;
  },
};

export const actions = {
  async getPokemonList({ commit }) {
    const pokemonList = await getPokemonList();
    commit("setPokemonList", pokemonList.results);
    commit("setShowingList", pokemonList.results);
  },

  async getPokemon({ commit }, payload) {
    const pokemon = await getPokemon(payload);
    commit("setPokemon", pokemon);
    commit("setShowModal", true);
  },

  setFilter({ state, commit }, payload) {
    const filtered = state.pokemonList.filter((f) =>
      f.name.includes(payload.toLowerCase())
    );
    commit("setShowingList", filtered);
  },
};

export const getters = {
  getPokemonList(state) {
    return state.pokemonList;
  },

  getShowingList(state) {
    return state.showingList;
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

  getFilter(state) {
    return state.filter;
  },
};
export default {
  state: { ...initialState },
  actions,
  mutations,
  getters,
};
