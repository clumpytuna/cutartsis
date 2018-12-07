<template>
  <div class="toolbar">
    <div class="logo-wrapper">
      <router-link to="/" class="logo">
        CUT<span class="art">ART</span>SIS
      </router-link>
    </div>
    <div class="links_wrapper">
      <router-link to="/random" class="link random">RANDOM</router-link>
      <router-link to="/about" class="link about-us">ABOUT US</router-link>
      <router-link to="/donate" class="link donate">DONATE</router-link>
    </div>
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

  .link + .link {
    margin-left: calc(100vw * 179 / 15118);
  }

  a {
    text-decoration: none;
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

  .art {
    background: no-repeat url("/images/decorations/patterns/ART/1.png");
    background-size: contain;

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .random:hover {
    background: no-repeat url("/images/decorations/patterns/random/1.png");
    background-size: contain;
  }

  .about-us:hover {
    background: no-repeat url("/images/decorations/patterns/about_us/3.png");
    background-size: contain;
  }

  .donate:hover {
    background: no-repeat url("/images/decorations/patterns/donate/1.png");
    background-size: contain;
  }

  .link:hover {
    /*
      TODO background-clip text
       это не очень просто сделать,
       так как в отличие от слова ART (у которого все буквы идеально касаются границ bounding box в html),
       у слов Donate и About us между буквами и границами bounding box в html есть небольшой отступ
    */
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
</style>

<script>
  export default {
    name: 'Toolbar',
  };
</script>
