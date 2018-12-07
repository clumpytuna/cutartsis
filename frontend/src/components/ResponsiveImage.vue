<template>
  <img
    :src="src"
    :alt="alt"
    :srcset="srcset"
    :sizes="sizes"
  >
</template>

<script>
  export default {
    name: 'ResponsiveImage',
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: '',
      },
      sizes: {
        type: String,
        default: '100vw',
      },
    },
    data() {
      return {
        // TODO решить какие нужны breakpoints
        breakpoints: [600, 960, 1264, 1904],
      };
    },
    computed: {
      srcset() {
        const src = this.src.replace('/images/', '');
        const entries = this.breakpoints.map(breakpoint => `/images_resized/${breakpoint}/${src} ${breakpoint}w`);
        return entries.join(',');
      },
    },
  };
</script>
