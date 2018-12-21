<template>
  <div class="root">
    <div v-for="word of words">
      <span
        :class="wordClasses"
        :style="`--image-url: url(${getWordImageUrl(word)})`"
      >
        {{ word.word }}
      </span>
    </div>
    <button @click="isAnimated = !isAnimated">{{ isAnimated ? 'Disable animation' : 'Enable animation' }}</button>
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
    font-size: calc(5vw + 5vh);
    border: 2px solid #0D47A1;
    line-height: 1;

    background: no-repeat var(--image-url);
    background-size: contain;
  }

  .word_animated {
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

  .word_only-text {
    background: none;
    background-clip: initial;
    -webkit-background-clip: initial;
    color: black;
  }

  .word-clipped {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .word-only-image {
    background-clip: initial;
    -webkit-background-clip: initial;
    color: transparent;
  }
</style>

<script>
  import { getImageResizedUrl } from '../components/responsive';

  export default {
    data: () => ({
      isAnimated: true,
      animationStep: 2,
      words: [
        { word: 'ART', path: 'ART', width: 3191 / 3 },
        { word: 'RANDOM', path: 'random', width: 805 },
        { word: 'ABOUT US', path: 'about_us', width: 914 },
        { word: 'DONATE', path: 'donate', width: 715 },
      ],
    }),
    mounted() {
      document.addEventListener('keydown', this.onKeydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.onKeydown);
    },
    methods: {
      getWordImageUrl(word) {
        const imageUrl = `/images/decorations/patterns/${word.path}/1.png`;
        return getImageResizedUrl(imageUrl, word.width / 15118);
      },
      onKeydown(event) {
        const delta = event.code === 'ArrowLeft' ? -1 : event.code === 'ArrowRight' ? +1 : 0;
        this.animationStep = (3 + this.animationStep + delta) % 3;
      },
    },
    computed: {
      wordClasses() {
        const animationStep = this.isAnimated ? -1 : this.animationStep;
        return {
          'word': true,
          'word_animated': this.isAnimated,
          'word-only-image': animationStep === 0,
          'word-clipped': animationStep === 1,
          'word_only-text': animationStep === 2,
        };
      },
    },
  };
</script>
