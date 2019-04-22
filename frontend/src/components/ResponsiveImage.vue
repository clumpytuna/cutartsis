<template>
  <img :src="srcCurrent">
</template>

<script>
  import { getImageResizedUrl } from './responsive';

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  let dummyImage;

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
      useJp2: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isImageLoaded: false,
      };
    },
    async created() {
      if (!this.previewSrc) return;
      const image = new Image();
      image.onload = () => this.isImageLoaded = true;
      image.src = this.srcComputed;
      dummyImage = image;
    },
    computed: {
      srcCurrent() {
        return this.previewSrc && !this.isImageLoaded ? this.previewSrc : this.srcComputed;
      },
      srcComputed() {
        const src = getImageResizedUrl(this.src, this.sizes / 100, this.width);
        return isSafari && this.useJp2 ? src.replace(/jpg$/, 'jp2') : src;
      },
    },
  };
</script>
