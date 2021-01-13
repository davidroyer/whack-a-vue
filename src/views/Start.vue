<template>
  <div class="flex flex-col flex-wrap items-center justify-center h-full">
    <h1
      class="mb-4 text-5xl font-bold sm:text-6xl sm:mb-8 md:text-7xl font-play"
    >
      Whack-A-Vue
    </h1>
    <button class="bg-indigo-600 " @click="startGame">
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
      this.$store.commit("setPlaying", true);
    }
  }
};
</script>

<style lang="postcss"></style>
