<template>
  <div id="app">
    <corners class="corners" />
    <toolbar class="toolbar" v-if="!$route.meta.hideToolbar" />
    <router-view />
  </div>
</template>

<style>
  @font-face {
    font-family: "Berthold";
    src: url('./assets/Berthold.otf') format("opentype");
    /*src: url('./assets/Berthold_cropped.otf') format("opentype");*/
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
    padding-left: calc(100vw * 679 / 15118);
    padding-right: calc(100vw * 679 / 15118);
    padding-bottom: calc(100vw * 429 / 15118);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .corners {
    z-index: -1;
  }
</style>

<script>
  import Corners from './components/Corners';
  import Toolbar from './components/Toolbar';

  export default {
    components: { Toolbar, Corners },
  };
</script>
