<template>
  <div class="toolbar">
    <router-link to="/" class="logo">
      CUT<span class="art">ART</span>SIS
    </router-link>
    <router-link to="/random" class="toolbar__link random">RANDOM</router-link>
    <router-link to="/about" class="toolbar__link about-us">ABOUT US</router-link>
    <router-link to="/donate" class="toolbar__link donate">DONATE</router-link>
  </div>
</template>

<style scoped>
  .toolbar {
    display: flex;
    align-items: center;
    padding-right: calc(100vw * 318 / 15118);
  }

  .random {
    margin-left: auto;
  }

  .toolbar__link + .toolbar__link {
    margin-left: calc(100vw * 376 / 15118);
  }

  a {
    text-decoration: none;
  }

  .toolbar__link {
    /* 685 — ширина DONATE при font-size: 10vw; и размере экрана 1600px */
    /* Подробное объяснение в .logo */
    font-size: calc(10vw * (1429 / 15118) / (685 / 1600));
    line-height: 1;
    color: black;
  }

  .toolbar__link:hover {
    color: #1976d2;
  }

  .logo {
    /* 936 — ширина CUTARTSIS при font-size: 10vw; и размере экрана 1600px */
    /* Получаем пропорцию: */
    /* 10vw ⇒ 936/1600 */
    /* Xvw ⇒ 6375/15118 */
    /* X = (6375/15118) / (936/1600) */
    font-size: calc(10vw * (6375 / 15118) / (936 / 1600));
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

  .about-us, .donate {
    /*
      TODO background-clip text
       это не очень просто сделать,
       так как в отличие от слова ART (у которого все буквы идеально касаются границ bounding box в html),
       у слов Donate и About us между буквами и границами bounding box в html есть небольшой отступ
    */
    /*color: transparent;*/
  }

  .about-us {
    /*background: no-repeat url("/images/decorations/patterns/about_us/3.png");*/
    /*background-size: contain;*/
  }

  .donate {
    /*background: no-repeat url("/images/decorations/patterns/donate/1.png");*/
    /*background-size: contain;*/
  }
</style>

<script>
  export default {
    name: 'Toolbar',
  };
</script>
