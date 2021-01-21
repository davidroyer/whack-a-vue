export default ({ isDev, store }) => {
  store.commit('setIsDev', isDev)
}
