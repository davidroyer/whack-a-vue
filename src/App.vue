<template>
  <div id="app" class="h-screen bg-pink-50">
    <Start v-if="!playing" />
    <Game v-else />
  </div>
</template>

<script>
import Start from "@/views/Start.vue";
import Game from "@/views/Game.vue";
export default {
  name: "App",
  components: { Start, Game },

  computed: {
    playing() {
      return this.$store.state.playing;
    }
  }
};
</script>
