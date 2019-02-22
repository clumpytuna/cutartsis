<template>
  <img :src="srcComputed">
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
        default: 100,
      },
    },
    computed: {
      srcComputed() {
        return getImageResizedUrl(this.src, this.sizes / 100);
      },
    },
  };
</script>
