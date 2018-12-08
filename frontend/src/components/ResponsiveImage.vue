<template>
  <img
    :src="srcComputed"
    :alt="alt"
  >
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
      alt: {
        type: String,
        default: '',
      },
      sizes: {
        // процент ширины экрана, который предположительно займёт картинка
        type: Number,
        default: 100,
      },
      useJpg: {
        type: Boolean,
        default: true,
      },
    },
    computed: {
      srcComputed() {
        return getImageResizedUrl(this.src, this.sizes / 100, this.useJpg);
      },
    },
  };
</script>
