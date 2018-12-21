<template>
  <div class="root">
    <div v-for="word of words">
      <span
        class="word"
        :style="`--image-url: url(${getWordImageUrl(word)})`"
      >
      {{ word.word }}
    </span>
    </div>
  </div>
</template>

<style scoped>
  .root {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .word {
    animation-name: word;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;
  }

  @keyframes word {
    0% {
      background-clip: initial;
      -webkit-background-clip: initial;
      color: black;
    }

    25% {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    75% {
      background-clip: initial;
      -webkit-background-clip: initial;
      color: transparent;
    }
  }

  .word {
    font-size: calc(5vw + 5vh);
    border: 2px solid #0D47A1;
    line-height: 1;

    background: no-repeat var(--image-url);
    background-size: contain;
  }
</style>

<script>
  import { getImageResizedUrl } from '../components/responsive';

  export default {
    data: () => ({
      words: [
        { word: 'ART', path: 'ART', width: 3191 / 3 },
        { word: 'RANDOM', path: 'random', width: 805 },
        { word: 'ABOUT US', path: 'about_us', width: 914 },
        { word: 'DONATE', path: 'donate', width: 715 },
      ],
    }),
    methods: {
      getWordImageUrl(word) {
        const imageUrl = `/images/decorations/patterns/${word.path}/1.png`;
        return getImageResizedUrl(imageUrl, word.width / 15118);
      },
    },
  };
</script>
