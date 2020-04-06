<template>
  <header class="toolbar">
    <router-link to="/" class="logo">
      CUT<span class="art">ART</span>SIS
    </router-link>
    <div class="links_wrapper">
      <router-link
        to="/tags/background"
        class="link"
      >
        TAGS
      </router-link>
      <router-link
        to="/about"
        class="link"
      >
        ABOUT US
      </router-link>
    </div>
  </header>
</template>

<style scoped>
  .toolbar {
    display: flex;
    background-color: white;
    position: sticky;
    top: 0;
    padding-top: calc(100vw * 280 / 15118);
    /* TODO убрать вычитание 100vw * 4 / 1600 и изменить шрифт чтобы у букв не было отступов снизу */
    padding-bottom: calc(100vw * 132 / 15118 - 100vw * 4 / 1600);
  }

  .links_wrapper {
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    text-decoration: none;
  }

  .logo {
    /* 936 — ширина CUTARTSIS при font-size: 10vw; и размере экрана 1600px */
    /* Получаем пропорцию: */
    /* 10vw ⇒ 936/1600 */
    /* Xvw ⇒ 3663/15118 */
    /* X = (3663/15118) / (936/1600) * 10 */
    font-size: calc(10vw * (3663 / 15118) / (936 / 1600));
    font-family: Berthold;
    user-select: none;
    line-height: 1;
    color: black;
  }

  .art {
    color: #fc7152; /* в макете почему-то указан #df7054, но визуально вроде больше #fc7152 подходит */
  }

  .link + .link {
    margin-left: calc(100vw * 262 / 15118);
  }

  .link {
    /* 994 — ширина RESOLUTION при font-size: 10vw; и размере экрана 1600px */
    /* Подробное объяснение в .logo */
    font-size: calc(10vw * (1862 / 15118) / (994 / 1600));
    font-weight: bold;
    line-height: 1;
  }
</style>
