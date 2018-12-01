<template>
  <div class="root custom-scrollbar">
    <div class="grid">
      <img
        v-for="image of images"
        :src="`/images/content/${image}`"
        class="image"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import '../styles/custom-scrollbar';

  .root {
    border: 1px solid black;
    flex: 1;
    overflow-y: scroll;
  }

  .grid {
    display: grid;
    grid-auto-rows: 300px;
    grid-template-columns: repeat(4, 1fr);
  }

  .image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: scale-down;
  }
</style>

<script>
  import images from './images';

  export default {
    name: 'home',
    data() {
      return {
        images,
      };
    },
  };
</script>
