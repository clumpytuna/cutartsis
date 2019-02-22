<template>
  <div id="app">
    <the-toolbar class="toolbar" v-if="!$route.meta.hideToolbar" />
    <router-view />
    <the-footer class="footer" v-if="!$route.meta.hideToolbar" />
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

  * {
    box-sizing: border-box;
  }

  #app {
    min-height: 100%;
  }

  body::-webkit-scrollbar {
    width: 0;
  }

  #app {
    font-family: AktivGroteskCorp, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
    padding-left: calc(100vw * 6.1 / 128);
    padding-right: calc(100vw * 6.1 / 128);
    display: flex;
    flex-direction: column;
  }

  .toolbar, .footer {
    z-index: 1;
  }
</style>

<script>
  import TheToolbar from './components/TheToolbar';
  import TheFooter from '@/components/TheFooter';

  export default {
    components: { TheFooter, TheToolbar },
  };
</script>
