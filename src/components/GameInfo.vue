<template>
  <div class="flex flex-col items-center justify-around w-full p-2 game-info">
    <div
      class="flex justify-between w-40 h-full px-4 text-3xl text-white bg-pink-600 rounded-t-lg shadow-md font-play game-score"
    >
      <span class="mr-4">
        <strong>Score:</strong>
      </span>
      <span>{{ score }}</span>
    </div>
    <div
      class="w-40 pt-2 pb-4 font-semibold text-center text-pink-600 bg-black shadow-md game-clock rounded-b-xl text-8xl"
    >
      <div>{{ clock }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    clock: {
      type: Number,
      required: true
    },

    score: {
      type: Number,
      required: true
    }
  }
};
</script>

<style></style>
