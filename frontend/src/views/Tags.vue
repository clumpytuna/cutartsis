<template>
  <div v-if="tags">
    <div class="tags-wrapper container-padding">
      <div class="tags">
        <router-link
          v-for="tag of tags"
          class="tag link"
          :to="`/tags/${tag}`"
        >
          #{{ tag }}
        </router-link>
      </div>
    </div>

    <cuts v-if="selectedTag" :tag="selectedTag" />
  </div>
</template>

<style scoped>
  .tags-wrapper {
    margin-top: 5vh;
    margin-bottom: 10vh;
  }

  .tags {
    display: grid;
    grid-template-columns: repeat(8, max-content);
    align-items: center;
  }

  .tag {
    display: block;
    margin-right: 1vw;
    font-weight: bold;

    /* 1050 — ширина #background при font-size: 10vw; и размере экрана 1680px */
    font-size: calc(10vw * (886 / 15118) / (1050 / 1680));
  }

  .tag.router-link-active {
    color: #fc7152;
  }
</style>

<script>
  import Cuts from '@/views/Cuts';

  const TAGS = ['background', 'children', 'group', 'animals', 'plants', 'motion', 'sitting', 'coloured', 'uncoloured', 'Isle of Dogs', 'Vincent van Gogh' , 'Paul Gauguin', 'Edvard Munch', 'realistic', 'cartoons', 'art'];

  export default {
    components: { Cuts },
    props: ['selectedTag'],
    data() {
      return {
        tags: TAGS,
      };
    },
  };
</script>
