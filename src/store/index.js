import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    catalogFilterType: "",
    buttonFilterType: "",
    minPrice: 0,
    maxPrice: 0,
  },
  getters: {
    filterType(state) {
      return state.catalogFilterType;
    },
    buttonFilter(state) {
      return state.buttonFilterType;
    },
    newMinPrice(state) {
      return state.minPrice;
    },
    newMaxPrice(state) {
      return state.maxPrice;
    }
  },
  mutations: {
    setMinPrice(state, minPrice) {
      state.minPrice = minPrice;
    },
    setMaxPrice(state, maxPrice) {
      state.maxPrice = maxPrice;
    },
  },
  actions: {},
  modules: {}
})
