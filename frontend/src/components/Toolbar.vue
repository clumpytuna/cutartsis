<template>
  <div class="toolbar">
    <div class="logo-wrapper">
      <router-link to="/" class="logo">
        CUT<span class="art" :style="`--image-url: url(${artImageUrl})`">ART</span>SIS
      </router-link>
    </div>
    <div class="links_wrapper">
      <router-link
        to="/random"
        class="link"
        :style="`--image-url: url(${randomImageUrl})`"
      >
        RANDOM
      </router-link>
      <router-link
        to="/about"
        class="link"
        :style="`--image-url: url(${aboutUsImageUrl})`"
      >
        ABOUT US
      </router-link>
      <router-link
        to="/donate"
        class="link"
        :style="`--image-url: url(${donateImageUrl})`"
      >
        DONATE
      </router-link>
    </div>

    <div class="images_preload"></div>
  </div>
</template>

<style scoped>
  .toolbar {
    background-color: white;
    position: sticky;
    top: 0;
    padding-top: calc(100vw * 280 / 15118);
    /* TODO убрать вычитание 100vw * 4 / 1600 и изменить ширфт чтобы у букв не было отступов снизу */
    padding-bottom: calc(100vw * 132 / 15118 - 100vw * 4 / 1600);
  }

  .logo-wrapper {
    text-align: center;
    /* TODO убрать вычитание 100vw * 11 / 1600 и изменить ширфт чтобы у букв не было отступов снизу */
    margin-bottom: calc(100vw * 281 / 15118 - 100vw * 11 / 1600);
  }

  .links_wrapper {
    display: flex;
    justify-content: center;
  }

  .logo, .link {
    text-decoration: none;
  }

  .link + .link {
    margin-left: calc(100vw * 179 / 15118);
  }

  .link {
    /* 685 — ширина DONATE при font-size: 10vw; и размере экрана 1600px */
    /* Подробное объяснение в .logo */
    font-size: calc(10vw * (715 / 15118) / (685 / 1600));
    line-height: 1;
    color: black;
  }

  .logo {
    /* 936 — ширина CUTARTSIS при font-size: 10vw; и размере экрана 1600px */
    /* Получаем пропорцию: */
    /* 10vw ⇒ 936/1600 */
    /* Xvw ⇒ 3191/15118 */
    /* X = (3191/15118) / (936/1600) */
    font-size: calc(10vw * (3191 / 15118) / (936 / 1600));
    user-select: none;
    line-height: 1;
    color: black;
  }

  .art, .link {
    /*
      TODO улучшить background-clip text для .link
       это не очень просто сделать,
       так как в отличие от слова ART (у которого все буквы идеально касаются границ bounding box в html),
       у слов Donate и About us между буквами и границами bounding box в html есть небольшой отступ
    */
    background: no-repeat var(--image-url);
    background-size: contain;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .link:not(:hover) {
    background-position: -9999px -9999px;
    color: initial;
  }
</style>

<script>
  import { getImageResizedUrl } from './responsive';

  export default {
    name: 'Toolbar',
    computed: {
      artImageUrl() {
        const imageUrl = '/images/decorations/patterns/ART/1.png';
        const cutartsisWordRelativeWidth = 3191 / 15118;
        const artWordRelativeWidth = cutartsisWordRelativeWidth / 3;
        return getImageResizedUrl(imageUrl, artWordRelativeWidth);
      },
      randomImageUrl() {
        const imageUrl = '/images/decorations/patterns/random/1.png';
        return getImageResizedUrl(imageUrl, 805 / 15118);
      },
      aboutUsImageUrl() {
        const imageUrl = '/images/decorations/patterns/about_us/1.png';
        return getImageResizedUrl(imageUrl, 914 / 15118);
      },
      donateImageUrl() {
        const imageUrl = '/images/decorations/patterns/donate/1.png';
        return getImageResizedUrl(imageUrl, 715 / 15118);
      },
    },
  };
</script>
