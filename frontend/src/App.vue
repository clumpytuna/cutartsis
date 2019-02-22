<template>
  <div id="app">
    <toolbar class="toolbar" v-if="!$route.meta.hideToolbar" />
    <router-view />
  </div>
</template>

<style>
  @font-face {
    font-family: "Berthold";
    src: url('/static/Berthold_Akzidenz_Grotesk_Super.otf') format("opentype");
  }

  @font-face {
    font-family: "AktivGroteskCorp";
    src: url('/static/Aktiv_Grotesk_Corp-regular.ttf') format("opentype");
  }

  @font-face {
    font-family: "AktivGroteskCorp";
    src: url('/static/Aktiv_Grotesk_Corp-bold.ttf') format("opentype");
    font-weight: bold;
  }

  html, body {
    height: 100%;
  }

  #app {
    min-height: 100%;
  }

  body::-webkit-scrollbar {
    width: 0;
  }

  #app {
    font-family: Berthold, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
    padding-left: calc(100vw * 6.1 / 128);
    padding-right: calc(100vw * 6.1 / 128);
    display: flex;
    flex-direction: column;
  }

  * {
    box-sizing: border-box;
  }
</style>

<script>
  import Toolbar from './components/Toolbar';

  export default {
    components: { Toolbar },
  };
</script>
