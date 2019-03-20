<template>
  <div v-if="tags" class="tags-wrapper">
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
</template>

<style scoped>
  .tags-wrapper {
    display: flex;
    height: 100%;
  }

  .tags {
    width: 70vw;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: minmax(30px, max-content);
    align-items: center;
    justify-items: center;
  }

  .tag {
    display: block;
    padding: 7px;
    word-break: break-word;
  }
</style>

<script>
  import { tagsPromise } from '@/views/data';

  export default {
    data() {
      return {
        tags: null,
      };
    },
    async mounted() {
      const tagsAll = [].concat(...Object.values(await tagsPromise));
      const numberTagImages = {};
      for (const tag of tagsAll) {
        if (!(tag in numberTagImages)) numberTagImages[tag] = 0;
        ++numberTagImages[tag];
      }

      this.tags = [...new Set(tagsAll)]
        .sort((tag1, tag2) => numberTagImages[tag2] - numberTagImages[tag1]);
    },
  };
</script>
