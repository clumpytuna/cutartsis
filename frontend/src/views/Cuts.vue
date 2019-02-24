<template>
  <div class="columns">
    <div
      v-for="(column, i) of columns"
      class="column"
    >
      <router-link
        v-for="image of column"
        class="image-wrapper"
        :to="`/cut/${image.image.replace('.png', '')}`"
        replace
      >
        <div
          class="image-placeholder"
          :style="`--height: ${image.height}; --width: ${image.width};`"
        >
          <responsive-image
            class="image"
            :src="`/images/content/${image.image}`"
            :sizes="(i % 2 === 0 ? 19.8 : 28.25) / 128.1 * 100"
            :width="image.width"
            @click.native="onImageClick"
            alt="cut-out image"
          />
        </div>

        <div class="tags-wrapper">
          <div class="tags">
            #people #musicans #group #one #two #three #dancer
          </div>
        </div>
      </router-link>
    </div>

    <cut-modal
      v-if="cut"
      :cut="cut"
      :previewSrc="currentModalCutPreviewSrc"
      @close="$router.replace('/')"
    />
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

  .image-wrapper:hover .image {
    cursor: pointer;
    opacity: 0.9;
    transition: opacity .3s;
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
    color: black;

    /* 782 — ширина #musicans при font-size: 10vw; и размере экрана 1600px */
    /* Подробное объяснение в .logo */
    font-size: calc(10vw * (513 / 15118) / (782 / 1600));
  }
</style>

<script>
  import getColumns from './layout';
  import ResponsiveImage from '../components/ResponsiveImage';
  import CutModal from '@/components/CutModal';

  const NUMBER_COLUMNS = 5;

  export default {
    name: 'home',
    components: { CutModal, ResponsiveImage },
    props: ['cut'],
    data() {
      return {
        columns: null,
        currentModalCutPreviewSrc: null,
      };
    },
    async mounted() {
      this.columns = await getColumns(NUMBER_COLUMNS);
    },
    methods: {
      onImageClick(event) {
        this.currentModalCutPreviewSrc = event.target.getAttribute('src');
        console.log(this.currentModalCutPreviewSrc);
      },
    },
  };
</script>
