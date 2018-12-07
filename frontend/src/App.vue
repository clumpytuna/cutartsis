<template>
  <div id="app">
    <corners class="corners" />
    <toolbar class="toolbar" />
    <router-view />
  </div>
</template>

<style>
  @font-face {
    font-family: "Berthold";
    src: url('/static/Berthold_Akzidenz_Grotesk_Super.otf') format("opentype");
  }

  html, body {
    height: 100%;
  }

  #app {
    font-family: Berthold, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    padding: calc(100vw * 280 / 15118) calc(100vw * 679 / 15118) calc(100vw * 429 / 15118);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .corners {
    z-index: 1;
  }

  .toolbar {
    position: relative;
    z-index: 2;
    /* TODO убрать вычитание 100vw * 4 / 1600 и изменить ширфт чтобы у букв не было отступов снизу */
    margin-bottom: calc(100vw * 132 / 15118 - 100vw * 4 / 1600);
  }
</style>

<script>
  import Corners from './components/Corners';
  import Toolbar from './components/Toolbar';

  export default {
    components: { Toolbar, Corners },
  };
</script>
