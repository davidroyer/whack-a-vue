import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playing: false,
    gameScore: 0
  },

  mutations: {
    setPlaying(state, payload) {
      state.playing = payload;
    },

    increaseScore(state, payload) {
      state.gameScore = state.gameScore + payload;
    },

    resetScore(state) {
      state.gameScore = 0;
    }
  },
  actions: {},
  modules: {}
});
