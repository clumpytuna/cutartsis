<template>
  <div class="corners">
    <img class="corner corner-top-left" src="/images/decorations/corners/top-left/12.png" alt="">
    <img class="corner corner-top-right" src="/images/decorations/corners/top-right/1.png" alt="">
    <img class="corner corner-bottom-left" src="/images/decorations/corners/bottom-left/1.png" alt="">
    <img class="corner corner-bottom-right" src="/images/decorations/corners/bottom-right/1.png" alt="">
  </div>
</template>

<style scoped>
  .corners {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .corner {
    position: absolute;
    height: calc(100vmax * 895 / 15118);
    width: calc(100vmax * 895 / 15118);
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
  export default {
    name: 'Corners',
  };
</script>
