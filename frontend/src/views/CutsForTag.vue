<template>
  <div>
    <h2>{{ tag[0].toUpperCase() + tag.substring(1) }}</h2>
    <cuts :tag="tag" />
  </div>
</template>

<style scoped>

</style>

<script>
  import Cuts from '@/views/Cuts';

  export default {
    name: 'CutsForTag',
    components: { Cuts },
    props: ['tag'],
    data() {
      return {
        tags: null,
      };
    },
  };
</script>

