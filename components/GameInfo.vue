<template>
  <div
    class="flex flex-col items-center justify-around w-full p-2 mb-6 game-info"
  >
    <div
      class="flex justify-center w-56 h-full px-2 py-1 text-3xl text-white bg-pink-600 rounded-t-lg shadow-md font-play game-score"
    >
      <span>
         <strong>Game Clock</strong>
      </span>
    </div>
    <div
      class="w-56 pt-2 pb-4 font-black text-center text-pink-600 bg-black shadow-md game-clock rounded-b-xl text-8xl"
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
    }
  }
}
</script>

<style></style>
