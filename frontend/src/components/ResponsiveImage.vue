<template>
  <img :src="previewSrc && !previewShown ? previewSrc : srcComputed">
</template>

<script>
  import { getImageResizedUrl } from './responsive';

  export default {
    name: 'ResponsiveImage',
    props: {
      src: {
        // должно заканчиваться на .png
        type: String,
        required: true,
      },
      sizes: {
        // процент ширины экрана, который предположительно займёт картинка
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      previewSrc: String,
    },
    data() {
      return {
        previewShown: false,
      };
    },
    async mounted() {
      const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
      await sleep(10);
      this.previewShown = true;
    },
    computed: {
      srcComputed() {
        return getImageResizedUrl(this.src, this.sizes / 100, this.width);
      },
    },
  };
</script>
