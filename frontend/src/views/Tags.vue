<template>
  <div v-if="tags">
    <div class="tags-wrapper">
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
    display: flex;
    justify-content: center;
  }

  .tags {
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(4, min-content);
    grid-auto-rows: minmax(30px, max-content);
    align-items: center;
  }

  .tag {
    display: block;
    margin-right: 5vw;
    font-weight: bold;
    font-size: 2.5vw;
  }

  .tag.router-link-active {
    color: #fc7152;
  }
</style>

<script>
  import Cuts from '@/views/Cuts';

  const TAGS = ['man', 'animal', 'modern', 'realistic', 'woman', 'vegetation', 'child', 'action', 'art', 'group', 'scene', 'static', 'cinema', 'composition', 'background', 'foreground'];

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
