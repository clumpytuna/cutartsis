<template>
  <img
    :src="srcComputed"
    :alt="alt"
    :srcset="srcset"
    :sizes="sizes"
  >
</template>

<script>
  const IS_DEVELOPMENT = window.location.hostname === 'localhost';
  // const IS_DEVELOPMENT = false;

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
        type: String,
        default: '100vw',
      },
      jpg: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        // TODO решить какие нужны breakpoints
        breakpoints: [600, 960, 1264, 1904],
      };
    },
    computed: {
      srcComputed() {
        return IS_DEVELOPMENT || !this.jpg ? this.src : this.src.replace('.png', '.jpg');
      },
      srcset() {
        if (IS_DEVELOPMENT) return null;

        const src = this.srcComputed.replace('/images/', '');
        const entries = this.breakpoints.map(breakpoint => `/images_resized/${breakpoint}/${src} ${breakpoint}w`);
        return entries.join(',');
      },
    },
  };
</script>
