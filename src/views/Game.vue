<template>
  <div class="game">
    <game-info :score="gameScore" :clock="gameClock" />

    <div
      class="grid w-full grid-flow-col grid-cols-3 grid-rows-3 gap-6 game-grid"
    >
      <div
        v-for="(mole, index) in moles"
        :key="index"
        class="flex items-center justify-center h-40 p-2 bg-indigo-900 rounded-md shadow-xl game-grid-item"
      >
        <transition name="scale" mode="out-in">
          <div
            v-if="mole.active"
            :key="gameScore"
            class="flex items-center justify-center w-1/3 bg-gray-100 rounded-full shadow-2xl cursor-pointer mole h-2/3"
            @click="handleMoleClicked(mole)"
          >
            {{ mole.id }}
          </div>
        </transition>
      </div>
    </div>
    <transition name="scale">
      <div
        v-if="showGameOverlay"
        class="flex flex-col items-center justify-center game-overlay"
      >
        <h2 class="mb-6 text-7xl">Game Over!</h2>
        <button class="bg-pink-700" @click="playAgain">Play Again</button>
      </div>
    </transition>
  </div>
</template>

<script>
import { delay } from "@/utils";
import GameInfo from "@/components/GameInfo";

const nineItemArray = Array.from(Array(9).keys());
const molesArray = nineItemArray.map((item, index) => {
  return {
    active: false,
    id: index + 1
  };
});

// TODO: Fix being able to wrack a div after the clock is showing 0 seconds

export default {
  components: { GameInfo },

  data: () => ({
    showGameOverlay: false,
    moles: molesArray,
    gameClock: 10,
    timerInterval: null,
    gameScore: 0
  }),

  mounted() {
    this.runGame();
    // this.showNewMole();
  },

  methods: {
    hideClickedMole(id) {
      const moleClickedIndex = this.moles.findIndex(mole => mole.id === id);
      this.moles[moleClickedIndex].active = false;
    },

    showNewMole() {
      const randomIndex = Math.floor(Math.random() * 9);
      this.moles[randomIndex].active = true;
    },

    handleMoleClicked({ id }) {
      ++this.gameScore;
      this.hideClickedMole(id);
      this.showNewMole();
    },

    runGame() {
      this.showNewMole();
      this.timerInterval = setInterval(() => {
        if (this.gameClock === 0) {
          this.endGame();
          clearInterval(this.timerInterval);
        } else --this.gameClock;
      }, 1000);
    },

    resetGame() {
      this.gameScore = 0;
      this.gameClock = 10;
    },

    endGame() {
      const activeMoleIndex = this.moles.findIndex(mole => mole.active);
      console.log(
        "🚀 ~ file: Game.vue ~ line 99 ~ endGame ~ activeMoleIndex",
        activeMoleIndex
      );
      this.moles[activeMoleIndex].active = false;
      this.showGameOverlay = true;
    },

    async playAgain() {
      this.showGameOverlay = false;
      this.resetGame();
      await delay(900);
      this.runGame();
    }
  }
};
</script>

<style lang="postcss">
.game {
  @apply flex flex-wrap items-center justify-center h-full max-w-5xl mx-auto;

  .mole {
    min-width: 100px;
  }

  &-overlay {
    @apply bg-indigo-900 top-0 bottom-0 right-0 left-0 fixed bg-opacity-75 text-white;
  }
}

.scale-enter-active {
  animation: scale-in 0.45s;
}
.scale-leave-active {
  animation: scale-in 0.4s reverse;
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
