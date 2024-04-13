import { getPokemonList, getPokemon } from "../api/poke-api";

const initialState = {
  pokemonList: [],
  showingList: [],
  showingFavsList: [],
  pokemon: {},
  showModal: false,
  allFilter: "",
  allFavsFilter: "",
  favs: JSON.parse(localStorage.getItem("PokeFavs")) || [],
  favList: [],
  loading: false,
  count: 0,
  page: 1,
};

export const mutations = {
  setPokemonList(state, payload) {
    state.pokemonList = payload;
  },

  setShowingList(state, payload) {
    state.showingList = payload;
  },

  setShowingFavsList(state, payload) {
    state.showingFavsList = payload;
  },

  setPokemon(state, payload) {
    state.pokemon = payload;
  },

  setShowModal(state, payload) {
    state.showModal = payload;
  },

  setAllFilter(state, payload) {
    state.allFilter = payload;
  },

  setFav(state, payload) {
    if (state.favs.includes(payload)) {
      const index = state.favs.indexOf(payload);
      state.favs.splice(index, 1);
    } else {
      state.favs.push(payload);
    }

    localStorage.setItem("PokeFavs", JSON.stringify(state.favs));
  },

  setFavList(state, payload) {
    state.favList = payload.filter((p) => state.favs.includes(p.name));
    state.showingFavsList = payload.filter((p) => state.favs.includes(p.name));
  },

  setLoading(state, payload) {
    state.loading = payload;
  },

  setCount(state, payload) {
    state.count = payload;
  },

  setPage(state, payload) {
    state.page = payload;
  },
};

export const actions = {
  async getPokemonList({ commit }, payload) {
    commit("setLoading", true);
    const pokemonList = await getPokemonList(payload);
    commit("setCount", pokemonList.count);
    commit("setLoading", false);
    commit("setPokemonList", pokemonList.results);
    commit("setShowingList", pokemonList.results);
    commit("setFavList", pokemonList.results);
  },

  async getPokemon({ commit }, payload) {
    const pokemon = await getPokemon(payload);
    commit("setPokemon", pokemon);
    commit("setShowModal", true);
  },

  setAllFilter({ state, commit }, payload) {
    const filtered = state.pokemonList.filter((f) =>
      f.name.includes(payload.toLowerCase())
    );
    commit("setShowingList", filtered);
  },

  setFavsFilter({ state, commit }, payload) {
    const filtered = state.favList.filter((f) =>
      f.name.includes(payload.toLowerCase())
    );
    commit("setShowingFavsList", filtered);
  },
  async setFav({ state, commit }, payload) {
    await commit("setFav", payload);
    commit("setFavList", state.pokemonList);
  },
  setPage({ commit }, payload) {
    commit("setPage", payload);
  },
};

export const getters = {
  getPokemonList(state) {
    return state.pokemonList;
  },

  getShowingList(state) {
    return state.showingList;
  },

  getShowingFavsList(state) {
    return state.showingFavsList;
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

  getAllFilter(state) {
    return state.allFilter;
  },

  getAllFavsFilter(state) {
    return state.allFavsFilter;
  },

  getFavs(state) {
    return state.favs;
  },

  getFavList(state) {
    return state.favList;
  },

  getLoading(state) {
    return state.loading;
  },

  getCount(state) {
    return state.count;
  },

  getPage(state) {
    return state.page;
  },
};
export default {
  state: { ...initialState },
  actions,
  mutations,
  getters,
};
