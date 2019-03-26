<template>
  <div class="columns" v-if="columns && tags">
    <div
      v-for="(column, i) of columns"
      class="column"
    >
      <div
        v-for="image of column"
        class="image-wrapper"
        :key="image.name"
      >
        <div
          class="image-placeholder"
          :style="`--height: ${image.height}; --width: ${image.width};`"
        >
          <responsive-image
            class="image"
            :src="`/images/content/${image.name}`"
            :sizes="(i % 2 === 0 ? 19.8 : 28.25) / 128.1 * 100"
            :width="image.width"
            @click.native="onImageClick($event, image)"
            alt="cut-out image"
          />
        </div>

        <div class="tags-wrapper">
          <div class="tags">
            <router-link
              v-for="tag of tags[image.name]"
              class="link"
              :to="`/tags/${tag}`"
            >
              #{{ tag }}
            </router-link>
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

  .image-wrapper:hover .image {
    opacity: 0.9;
    transition: opacity .3s;
  }

  .image-placeholder {
    position: relative;
    width: 100%;
    padding-bottom: calc(var(--height) / var(--width) * 100%);
  }

  .image {
    cursor: pointer;
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
  import ResponsiveImage from '@/components/ResponsiveImage';
  import { imagesPromise, tagsPromise } from '@/views/data';

  const NUMBER_COLUMNS = 5;

  export default {
    name: 'Cuts',
    components: { ResponsiveImage },
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
      if (this.cut) {
        const images = await imagesPromise;
        const image = images.find(image => image.name === this.cut + '.png');
        if (!image) this.$router.replace('/');
        window.history.replaceState(null, null, '/');
        this.$store.commit('setCutModal', { image });
      }

      this.tags = await tagsPromise;
      await this.updateColumns();
    },
    methods: {
      onImageClick(event, image) {
        const previewSrc = event.target.getAttribute('src');
        this.$store.commit('setCutModal', { image, previewSrc });
      },
      async updateColumns() {
        const images = await imagesPromise;
        const imagesFiltered = this.tag === undefined
          ? images
          : images.filter(image => this.tags[image.name].includes(this.tag));
        this.columns = getColumns(imagesFiltered, NUMBER_COLUMNS);
      },
    },
  };
</script>
