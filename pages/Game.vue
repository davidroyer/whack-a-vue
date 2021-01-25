<template>
  <div class="relative game" :class="{ 'overlay-active': showGameOverlay }">
    <game-info :clock="gameClock" />

    <div></div>
    <div
      class="grid w-full grid-flow-col grid-cols-3 grid-rows-3 gap-6 game-grid"
    >
      <game-hole
        v-for="(item, index) in moles"
        :key="index"
        :hole="item"
        @whacked-item="handleMoleClicked"
      />
    </div>

    <div
      v-if="showCountdown"
      class="absolute flex items-center justify-center w-48 h-48 font-extrabold text-white bg-pink-700 border-2 border-white rounded-full countdown text-9xl"
    >
      {{ countdownValue }}
    </div>

    <transition name="scale">
      <div v-if="showGameOverlay" class="game-overlay">
        <h2 class="text-5xl font-black sm:text-7xl">Game Over!</h2>
        <h3
          class="-mt-3 text-3xl font-extrabold mb-1/12 sm:mt-0 sm:text-5xl"
          v-text="`Your Score: ${gameScore}`"
        />
        <button class="bg-pink-600 hover:bg-pink-800" @click="playAgain">
          Play Again
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { delay, molesArray } from '@/utils'
import GameInfo from '@/components/GameInfo'
import GameHole from '@/components/GameHole'

export default {
  components: { GameInfo, GameHole },

  data: () => ({
    showGameOverlay: false,
    moles: molesArray,
    gameClock: 10,
    timerInterval: null,
    countdownValue: 0
  }),

  computed: {
    timeIsUp() {
      return this.gameClock === 0
    },

    gameScore() {
      return this.$store.state.gameScore
    },

    showCountdown() {
      return this.countdownValue > 0
    }
  },

  mounted() {
    this.runCountdown()
  },

  methods: {
    hideClickedMole(id) {
      const moleClickedIndex = this.moles.findIndex((mole) => mole.id === id)
      this.moles[moleClickedIndex].active = false
    },

    showNewMole() {
      const randomIndex = Math.floor(Math.random() * 9)
      this.moles[randomIndex].active = true
    },

    handleMoleClicked({ id }) {
      if (this.timeIsUp) return

      this.$store.commit('increaseScore', 1)
      this.hideClickedMole(id)
      this.showNewMole()
    },

    runGame() {
      this.showNewMole()

      this.timerInterval = setInterval(() => {
        if (this.timeIsUp) {
          this.endGame()
          clearInterval(this.timerInterval)
        } else --this.gameClock
      }, 1000)
    },

    resetGame() {
      this.$store.commit('resetScore')
      this.gameClock = 10
    },

    startGame() {},

    endGame() {
      const activeMoleIndex = this.moles.findIndex((mole) => mole.active)

      this.moles[activeMoleIndex].active = false
      this.showGameOverlay = true
    },

    playAgain() {
      this.showGameOverlay = false
      this.resetGame()
      this.runCountdown()
    },

    async runCountdown() {
      await delay(600)

      this.countdownValue = 3
      const countdownInterval = setInterval(() => {
        if (this.countdownValue === 0) {
          clearInterval(countdownInterval)
          this.runGame()
        } else {
          --this.countdownValue
        }
      }, 1000)
    }
  }
}
</script>

<style lang="postcss">
.game {
  @apply flex flex-wrap items-center justify-center h-full max-w-5xl mx-auto px-3 py-6;

  &:not(.overlay-active) {
    /* cursor: url("~@/assets/images/mallet.png"), auto; */
  }

  .mole {
    min-width: 100px;
  }

  &-overlay {
    @apply bg-indigo-900 top-0 bottom-0 right-0 left-0 fixed bg-opacity-75 text-white flex flex-col items-center justify-center;
    backdrop-filter: blur(6px);
  }
}

.scale-enter-active {
  animation: scale-in 0.35s;
}
.scale-leave-active {
  animation: scale-in 0.3s reverse;
}
@keyframes scale-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
