import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 150
  },
  getters: {

  },
  mutations: {
    increment (state, payload) {
      state.counter = state.counter + payload
    },
    decrease (state, payload) {
      state.counter = state.counter - payload
    }
  },
  actions: {
    onIncrement ({ commit }, number) {
      commit('increment', number)
    },
    onDecrease ({ commit }, number) {
      commit('decrease', number)
    },
    onClickButton ({ commit }, { isDecrease, number }) {
      isDecrease ? commit('decrease', number) : commit('increment', number)
    }
  },
  modules: {

  }
})
