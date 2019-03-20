<template>
  <div class="columns" v-if="columns">
    <div
      v-for="(column, i) of columns"
      class="column"
    >
      <router-link
        v-for="image of column"
        class="image-wrapper"
        :key="image.image"
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
            <router-link
              v-for="tag of tags[image.image]"
              class="link"
              :to="`/tags/${tag}`"
            >
              #{{ tag }}
            </router-link>
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

  .image-wrapper {
    display: block;
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
    padding-top: calc(100vw * 2 / 128);
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
  import { imagesPromise, tagsPromise } from '@/views/data';

  const NUMBER_COLUMNS = 5;

  export default {
    name: 'Cuts',
    components: { CutModal, ResponsiveImage },
    props: ['cut', 'tag'],
    data() {
      return {
        columns: null,
        tags: null,
        currentModalCutPreviewSrc: null,
      };
    },
    watch: {
      tag: 'updateColumns',
    },
    async created() {
      this.tags = await tagsPromise;
      await this.updateColumns();
    },
    methods: {
      onImageClick(event) {
        this.currentModalCutPreviewSrc = event.target.getAttribute('src');
      },
      async updateColumns() {
        const images = await imagesPromise;
        const imagesFiltered = this.tag === undefined
          ? images
          : images.filter(image => this.tags[image.image].includes(this.tag));
        this.columns = getColumns(imagesFiltered, NUMBER_COLUMNS);
      },
    },
  };
</script>
