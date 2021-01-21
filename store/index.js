export const state = () => ({
  playing: false,
  gameScore: 0,
  isDev: null
})

export const mutations = {
  setPlaying(state, payload) {
    state.playing = payload
  },

  increaseScore(state, payload) {
    state.gameScore = state.gameScore + payload
  },

  resetScore(state) {
    state.gameScore = 0
  },

  setIsDev(state, payload) {
    state.isDev = payload
  }
}
