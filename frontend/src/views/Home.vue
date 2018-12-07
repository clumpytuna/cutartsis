<template>
  <div
    class="grid"
    ref="grid"
    :style="`--grid-width: ${gridWidth || 0}px`"
  >
    <img
      v-if="gridWidth !== null"
      v-for="entry of layoutEntries"
      :src="`/images/content/${entry.name}`"
      class="image"
      :style="{ '--grid-i': entry.i, '--grid-j': entry.j, '--grid-h': entry.h, '--grid-w': entry.w }"
    >
  </div>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-auto-rows: calc(var(--grid-width) / 12);
    grid-template-columns: repeat(12, 1fr);
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    grid-row: var(--grid-i) / span var(--grid-h);
    grid-column: var(--grid-j) / span var(--grid-w);
  }
</style>

<script>
  import layoutEntries from './layout';

  export default {
    name: 'home',
    data() {
      return {
        layoutEntries,
        gridWidth: null,
      };
    },
    mounted() {
      this.updateGridWidth();
      window.addEventListener('resize', this.updateGridWidth);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.updateGridWidth);
    },
    methods: {
      updateGridWidth() {
        this.gridWidth = this.$refs.grid.clientWidth;
      },
    },
  };
</script>
