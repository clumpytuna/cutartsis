<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-container" v-if="image">

        <a
          :href="`/images/content/${image.image}`"
          download
          @click.stop
        >
          <responsive-image
            class="image"
            :src="`/images/content/${image.image}`"
            :sizes="40"
            :previewSrc="previewSrc"
            :width="image.width"
            alt="cut-out image"
          />
        </a>

        <div class="tags">
          #people #musicans #group #one #two #three #dancer
        </div>

      </div>
    </div>
  </transition>
</template>

<style scoped>
  .modal-mask {
    position: fixed;
    z-index: 10;
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

  .image {
    width: 40vw;
    height: 70vh;
    object-fit: contain;
    cursor: pointer;
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
  import { imagesPromise } from '@/views/layout';

  export default {
    name: 'CutModal',
    components: { ResponsiveImage },
    props: ['cut', 'previewSrc'],
    watch: {
      $route: 'updateImage',
    },
    data() {
      return {
        image: null,
      };
    },
    mounted() {
      this.updateImage();
      document.addEventListener('keydown', this.onKeydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.onKeydown);
    },
    methods: {
      async updateImage() {
        const images = await imagesPromise;
        this.image = images.find(image => image.image === this.cut + '.png');
        if (!this.image) {
          this.$router.replace('/');
        }
      },
      onKeydown(event) {
        if (event.key === 'Escape') {
          this.$emit('close');
        }
      },
    },
  };
</script>
