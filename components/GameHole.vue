<template>
  <div
    class="flex items-center justify-center h-40 p-2 bg-indigo-900 rounded-md shadow-xl game-grid-item"
  >
    <transition name="scale" mode="out-in">
      <div
        v-if="hole.active"
        :ref="`hole-${hole.id}`"
        :key="$store.state.gameScore"
        class="flex items-center justify-center w-1/3 bg-gray-100 rounded-full shadow-2xl cursor-pointer mole h-2/3"
        @click.prevent="handleItemClicked(hole)"
      >
        <img src="@/assets/images/logo.png" alt="Vue Logo" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    hole: {
      type: Object,
      required: true
    }
  },

  methods: {
    handleItemClicked(item) {
      // NOTE: Prevents any issue with dblclicks
      const clickedEl = this.$refs[`hole-${item.id}`]
      clickedEl.style.pointerEvents = 'none'

      this.$emit('whacked-item', item)
    }
  }
}
</script>

<style></style>
