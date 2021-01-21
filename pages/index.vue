<template>
  <div class="flex flex-col flex-wrap items-center justify-center h-full">
    <h1 class="mb-2 text-5xl font-bold font-play sm:mb-4 sm:text-7xl md:mb-6">
      Whack-A-Vue
    </h1>
    <button class="bg-indigo-600 hover:bg-indigo-800" @click="startGame">
      Start
    </button>
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

<style lang="postcss"></style>
