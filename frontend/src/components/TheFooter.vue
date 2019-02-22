<template>
  <div class="footer">
    <span><b>CUTARTSIS</b> Cutouts\ 20/08 added 10 new Cutouts</span>
    <a class="instagram" href="https://instagram.com/" target="_blank">
      <b>cut_art_sis</b>
      <instagram-icon class="instagram-icon" />
    </a>
  </div>
</template>

<style scoped>
  .footer {
    background-color: white;
    position: sticky;
    bottom: 0;
    padding-top: calc(100vw * 322 / 15118);
    padding-bottom: calc(100vw * (429 - 29) / 15118);

    display: flex;
    justify-content: space-between;

    /* 566 — ширина Cutouts при font-size: 10vw; и размере экрана 1600px */
    /* Подробное объяснение в .logo */
    font-size: calc(10vw * (530 / 15118) / (566 / 1600));
  }

  .instagram {
    display: flex;
    align-items: center;

    color: black;
    text-decoration: none;
  }

  .instagram-icon {
    margin-left: 7px;
    height: 20px;
    width: 20px;
  }
</style>

<script>
  import InstagramIcon from '@/components/InstagramIcon';

  export default {
    components: { InstagramIcon },
  };
</script>
