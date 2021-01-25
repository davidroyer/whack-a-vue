<template>
  <div class="flex flex-col flex-wrap items-center justify-center h-full">
    <AppHeader />

    <h1 class="mb-2 text-5xl font-bold font-play sm:text-7xl">Whack-A-Vue</h1>
    <p class="-mt-1.5 mb-6 text-center text-xl">
      You have 10 seconds to whack (click on) as many Vue logos as you can.
    </p>

    <nuxt-link
      tag="button"
      to="/game"
      class="bg-indigo-600 hover:bg-indigo-800"
      @click="startGame"
    >
      Start
    </nuxt-link>
  </div>
</template>

<script>
export default {
  mounted() {
    // this.startGame();
  },
  methods: {
    startGame() {
      this.$store.commit('setPlaying', true)
    }
  }
}
</script>
