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
    src: url('/Berthold_Akzidenz_Grotesk_Super.otf') format("opentype");
  }

  body {
    margin: 0;
  }

  #app {
    font-family: Berthold, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: calc(100vw * 675 / 15118);
    padding-top: calc(100vw * 571 / 15118);
  }

  .corners {
    z-index: 1;
  }

  .toolbar {
    position: relative;
    z-index: 2;
  }
</style>

<script>
  import Corners from './components/Corners';
  import Toolbar from './components/Toolbar';

  export default {
    components: { Toolbar, Corners },
  };
</script>
