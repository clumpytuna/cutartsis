<template>
  <div class="toolbar">
    <div class="logo">
      CUT<span class="art">ART</span>SIS
    </div>
  </div>
</template>

<style scoped>
  .logo {
    /* 936 — ширина CUTARTSIS при font-size: 10vw; и размере экрана 1600px */
    /* Получаем пропорцию: */
    /* 10vw ⇒ 936/1600 */
    /* Xvw ⇒ 6375/15118 */
    /* X = (6375/15118) / (936/1600) */
    font-size: calc(10vw * (6375 / 15118) / (936 / 1600));
    user-select: none;
  }

  .art {
    background: no-repeat url("/images/decorations/patterns/ART/1.png");
    background-size: contain;

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
