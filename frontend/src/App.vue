<template>
  <div id="app">
    <the-toolbar class="toolbar" />
    <main>
      <router-view />
    </main>
    <the-footer class="footer" />
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

  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;

    padding-left: calc(100vw * 6.1 / 128);
    padding-right: calc(100vw * 6.1 / 128);

    font-family: AktivGroteskCorp, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  main {
    flex: 1;
  }

  .toolbar, .footer {
    flex: none;
    z-index: 10;
  }

  a.link {
    text-decoration: none;
    color: black;
  }

  a.link:hover {
    color: #1867c0;
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
