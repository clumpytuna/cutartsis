<template>
  <div class="corners">
    <responsive-image
      class="corner corner-top-left"
      src="/images/decorations/corners/top-left/12.png"
      sizes="4vw"
      alt=""
    />
    <img class="corner corner-top-right" src="/images/decorations/corners/top-right/1.png" alt="">
    <img class="corner corner-bottom-left" src="/images/decorations/corners/bottom-left/1.png" alt="">
    <img class="corner corner-bottom-right" src="/images/decorations/corners/bottom-right/1.png" alt="">
  </div>
</template>

<style scoped>
  .corners {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    pointer-events: none;
  }

  .corner {
    position: absolute;
    height: calc(100vmax * 537 / 15118);
    width: calc(100vmax * 537 / 15118);
    user-select: none;
  }

  .corner-top-left {
    transform-origin: top left;
    top: 0;
    left: 0;
  }

  .corner-top-right {
    transform-origin: top right;
    top: 0;
    right: 0;
  }

  .corner-bottom-left {
    transform-origin: bottom left;
    bottom: 0;
    left: 0;
  }

  .corner-bottom-right {
    transform-origin: bottom right;
    bottom: 0;
    right: 0;
  }
</style>

<script>
  import ResponsiveImage from './ResponsiveImage';

  export default {
    name: 'Corners',
    components: { ResponsiveImage },
  };
</script>
