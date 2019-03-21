<template>
  <transition name="modal">
    <div class="modal-mask" v-if="tags && cutModal" @click="closeModal(true)">
      <div class="modal-container">

        <a
          :href="`/images/content/${cutModal.image.image}`"
          download
          class="image-wrapper"
          @click.stop
        >
          <responsive-image
            class="image"
            :src="`/images/content/${cutModal.image.image}`"
            :sizes="40"
            :previewSrc="cutModal.previewSrc"
            :width="cutModal.image.width"
            alt="cut-out image"
          />
        </a>

        <div class="tags">
          <router-link
            v-for="tag of tags[cutModal.image.image]"
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
    text-align: center;
  }

  .image-wrapper {
    display: block;
  }

  .image {
    width: 40vw;
    height: 70vh;
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
  import { tagsPromise } from '@/views/data';
  import { mapState } from 'vuex';

  export default {
    name: 'TheCutModal',
    components: { ResponsiveImage },
    watch: {
      'cutModal'(cutModal, cutModalOld) {
        if (!cutModalOld) {
          const url = `/cut/${cutModal.image.image.replace('.png', '')}`;
          window.history.pushState(null, null, url);
        }
      },
    },
    data() {
      return {
        image: null,
        tags: null,
      };
    },
    async created() {
      this.tags = await tagsPromise;
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
        this.$store.commit('setCutModal', null);
        if (goBackInHistory) {
          window.history.back();
        }
      },
    },
    computed: mapState(['cutModal']),
  };
</script>
