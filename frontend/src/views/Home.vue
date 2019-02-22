<template>
  <div class="columns">
    <div
      v-for="column of columns"
      class="column"
    >
      <div v-for="(image, i) of column" class="image-wrapper">
        <div
          class="image-placeholder"
          :style="`--height: ${image.height}; --width: ${image.width};`"
        >
          <responsive-image
            class="image"
            :src="`/images/content/${image.image}`"
            :sizes="(i % 2 === 1 ? 19.8 : 28.25) / 128.1 * 100"
            alt="cut-out image"
          />
        </div>

        <div class="tags-wrapper">
          <div class="tags">
            #people #musicans #group #one #two #three #dancer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .columns {
    display: flex;
  }

  .column {
    padding-left: calc(100vw * 1 / 128);
    padding-right: calc(100vw * 1 / 128);
  }

  .column:nth-child(odd) {
    flex: 19.8;
  }

  .column:nth-child(even) {
    flex: 28.25;
  }

  .image-wrapper + .image-wrapper {
    margin-top: calc(100vw * 2 / 128);
  }

  .image-placeholder {
    position: relative;
    width: 100%;
    padding-bottom: calc(var(--height) / var(--width) * 100%);
  }

  .image {
    position: absolute;
    width: 100%;
  }

  .tags-wrapper {
    margin-top: calc(100vw * 2 / 128);
    position: relative;
  }

  .tags {
    position: absolute;
    bottom: 0;
    width: 100%;
    word-wrap: break-word;

    /* 782 — ширина #musicans при font-size: 10vw; и размере экрана 1600px */
    /* Подробное объяснение в .logo */
    font-size: calc(10vw * (513 / 15118) / (782 / 1600));
  }
</style>

<script>
  import getColumns from './layout';
  import ResponsiveImage from '../components/ResponsiveImage';

  const NUMBER_COLUMNS = 5;

  export default {
    name: 'home',
    components: { ResponsiveImage },
    data() {
      return {
        columns: null,
      };
    },
    async mounted() {
      this.columns = await getColumns(NUMBER_COLUMNS);
    },
  };
</script>
