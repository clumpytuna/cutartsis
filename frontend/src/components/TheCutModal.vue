<template>
  <transition name="modal">
    <div class="modal-mask" v-if="cutModal" @click="closeModal(true)">
      <div class="modal-container">

        <a
          :href="`/images_png/content/${cutModal.image.name}`"
          download
          class="image-wrapper"
          @click.stop
        >
          <responsive-image
            class="image"
            :src="`/images/content/${cutModal.image.name}`"
            :sizes="imageSize.relativeWidth * 100"
            :previewSrc="cutModal.previewSrc"
            :width="cutModal.image.width"
            :style="{ '--relative-height': imageSize.relativeHeight, '--relative-width': imageSize.relativeWidth }"
            alt="cut-out image"
          />
        </a>

        <div class="tags">
          <router-link
            v-for="tag of cutModal.image.tags"
            class="link"
            :to="`/tags/${tag}`"
            @click.native.stop="closeModal(false)"
          >
            #{{ tag }}
          </router-link>
        </div>

      </div>
    </div>
  </transition>
</template>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 20;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(255, 255, 255, .9);
    transition: opacity .3s ease;
  }

  .modal-container {
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image {
    height: calc(var(--relative-height) * 100vh);
    width: calc(var(--relative-width) * 100vw);
    object-fit: contain;
    cursor: pointer;
    display: block;
  }

  .tags {
    margin-top: 1vh;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }
</style>

<script>
  import ResponsiveImage from '@/components/ResponsiveImage';
  import { mapState } from 'vuex';

  export default {
    name: 'TheCutModal',
    components: { ResponsiveImage },
    watch: {
      'cutModal'(cutModal, cutModalOld) {
        if (!cutModalOld) {
          const url = `/cut/${cutModal.image.name.replace('.png', '')}`;
          window.history.pushState(null, null, url);
          document.body.classList.add('modal-open');
        }
      },
    },
    data() {
      return {
        image: null,
      };
    },
    async created() {
      document.addEventListener('keydown', this.onKeydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.onKeydown);
    },
    methods: {
      onKeydown(event) {
        if (this.cutModal && event.key === 'Escape') {
          this.closeModal(true);
        }
      },
      closeModal(goBackInHistory) {
        document.body.classList.remove('modal-open');
        this.$store.commit('setCutModal', null);
        if (goBackInHistory) {
          window.history.back();
        }
      },
    },
    computed: {
      ...mapState(['cutModal']),
      imageSize() {
        const relativeHeightMax = 0.70;  // 70vh
        const relativeWidthMax = 0.70;  // 70vw

        const { height: absoluteHeight, width: absoluteWidth } = this.cutModal.image;
        const { pageHeight, pageWidth } = this.$store.state;
        const ratioHeight = pageHeight * relativeHeightMax / absoluteHeight;
        const ratioWidth = pageWidth * relativeWidthMax / absoluteWidth;
        const ratio = Math.min(ratioHeight, ratioWidth);

        const relativeHeight = absoluteHeight * ratio / pageHeight;
        const relativeWidth = absoluteWidth * ratio / pageWidth;
        return { relativeHeight, relativeWidth };
      },
    },
  };
</script>
