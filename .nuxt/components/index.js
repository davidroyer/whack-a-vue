export { default as GameHole } from '../../components/GameHole.vue'
export { default as GameInfo } from '../../components/GameInfo.vue'

export const LazyGameHole = import('../../components/GameHole.vue' /* webpackChunkName: "components/game-hole" */).then(c => c.default || c)
export const LazyGameInfo = import('../../components/GameInfo.vue' /* webpackChunkName: "components/game-info" */).then(c => c.default || c)
