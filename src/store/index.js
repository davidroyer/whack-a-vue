import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playing: false
  },
  mutations: {
    setPlaying(state, payload) {
      state.playing = payload;
    }
  },
  actions: {},
  modules: {}
});
