<template>
  <div id="app">
    <the-toolbar class="toolbar container-padding" />
    <main>
      <router-view class="router-view" />
    </main>
    <the-footer class="footer container-padding" />
    <the-cut-modal />
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

  * {
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body::-webkit-scrollbar {
    width: 0;
  }

  body.modal-open {
    overflow: hidden;
  }

  a.link {
    text-decoration: none;
    color: black;
  }

  a.link:hover {
    color: #1867c0;
  }

  .container-padding {
    padding-left: calc(100vw * 6.1 / 128);
    padding-right: calc(100vw * 6.1 / 128);
  }
</style>

<style scoped>
  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;

    font-family: AktivGroteskCorp, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    display: flex;
    justify-content: center;

    flex: 1;
  }

  .router-view:not(.full-width) {
    max-width: 1366px;
    flex: 1;
  }

  .toolbar, .footer {
    flex: none;
    z-index: 10;
  }
</style>

<script>
  import TheToolbar from './components/TheToolbar';
  import TheFooter from '@/components/TheFooter';
  import TheCutModal from '@/components/TheCutModal';

  export default {
    components: { TheCutModal, TheFooter, TheToolbar },
  };
</script>
