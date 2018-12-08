<template>
  <div
    class="grid"
    ref="grid"
    :style="`--grid-width: ${gridWidth || 0}px`"
  >
    <template v-for="i of numberRows">
      <div
        v-for="j of 12"
        class="cell-border"
        :style="{ '--grid-i': i, '--grid-j': j }"
      ></div>
    </template>

    <template v-if="gridWidth !== null">
      <responsive-image
        v-for="entry of layoutEntries"
        class="image"
        :src="`/images/content/${entry.name}`"
        :sizes="`${100 * (entry.h / 12)}vw`"
        :alt="entry.name"
        :style="{ '--grid-i': entry.i, '--grid-j': entry.j, '--grid-h': entry.h, '--grid-w': entry.w }"
      />
    </template>
  </div>
</template>

<style scoped>
  .grid {
    display: grid;
    grid-auto-rows: calc(var(--grid-width) / 12);
    grid-template-columns: repeat(12, 1fr);

    border-top: 1px solid black;
    border-left: 1px solid black;
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    grid-row: var(--grid-i) / span var(--grid-h);
    grid-column: var(--grid-j) / span var(--grid-w);
  }

  .cell-border {
    grid-row-start: var(--grid-i);
    grid-column-start: var(--grid-j);
    border-bottom: 1px solid black;
    border-right: 1px solid black;
  }
</style>

<script>
  import layoutEntries from './layout';
  import ResponsiveImage from '../components/ResponsiveImage';

  export default {
    name: 'home',
    components: { ResponsiveImage },
    data() {
      return {
        layoutEntries,
        gridWidth: null,
        numberRows: Math.max(...layoutEntries.map(entry => entry.i + entry.h - 1)),
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
