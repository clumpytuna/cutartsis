<template>
  <div class="root">
    <div class="text">
      <h2>What is <span class="colored">Cutartsis</span>?</h2>
      <p>Cutartsis is a project for a student architects working all over the world. Our team mindfully curates a collection of cut out people from pieces of art. We appreciate the works of each artists we use in our project and want to share with you. Our goal is to give students access to a database of free, high-res, PNG images that reflect our vision of beauty.</p>

      <h2>Support</h2>
      <p>You can support us in a three main ways. First, use these images in your student work. Share them, spread them around, tell your friends. Second, get involved by submitting your own images. You can do by <a href="mailto:submit@cutartsis.com" target="_blank">emailing submit@cutartsis.com</a>. Third, you can make a donation to help us paying servers and other administration stuff. Thank you!</p>

      <h2>License</h2>
      <p><span class="colored">Cutartsis</span> is an attempt to help students to bring visualizations of unbuilt architecture to life. Most of these images have not been licensed for commercial. This website and the contents therein are intended only for educational use and may not be legally used for commercial work of any kind without the consent of their rightful owners and permission from those depicted. If you have any questions or complaints contact <a href="mailto:info@cutartsis.com" target="_blank">info@cutartsis.com</a></p>

      <h2>Who does create <span class="colored">Cutartsis</span>?</h2>
      <p>We are a team of three hip people. Two freshly baked programmers from Moscow and one talented architect from Saint Petersburg. Feel free to contact us about anything. Cheers!</p>

      <h2>Follow:</h2>
      <p>
        Mikhail Anukhin <a href="https://github.com/clumpytuna" target="_blank">@GitHub</a><br>
        Bakovkin Ruslan <a href="https://www.behance.net/RUSlan551963ca" target="_blank">@Behance</a><br>
        Dmitry Murzin <a href="https://github.com/dima74" target="_blank">@GitHub</a><br>
      </p>
    </div>

    <img
      srcset="/images/about_us/600.jpg 600w,
              /images/about_us/960.jpg 960w,
              /images/about_us/1366.jpg 1366w,
              /images/about_us/1600.jpg 1600w,
              /images/about_us/1920.jpg 1920w,
              /images/about_us/2560.jpg 2560w,
              /images/about_us/3840.jpg 3840w"
      sizes="100vw"
      src="/images/about_us/1920.jpg"
      alt=""
    >
  </div>
</template>

<style scoped>
  .root {
    position: relative;
    padding-top: calc(100vw * (777 - 132) / 15118 - 2vh);
  }

  .text {
    position: absolute;
    padding-left: calc(100vw * 2967 / 15118 - 1vh);
    padding-right: calc(100vw * 2967 / 15118 - 1vh);
  }

  h2, p {
    /* 807 — ширина "Cutartsis is a project for a student architects working" при font-size: 2vw; и ширине экрана 1600px */
    font-size: calc(2vw * (7556 / 15118) / (807 / 1680));
    font-weight: bold;
  }

  h2 {
    margin-top: 0;
    margin-bottom: calc(100vw * 501 / 15118 - 1vh);
  }

  p {
    margin-top: 0;
    margin-bottom: calc(100vw * 900 / 15118 - 1vh);
  }

  a, .colored {
    color: #fc7152;
  }

  a:not(:hover) {
    text-decoration: none;
  }

  img {
    width: 100vw;
  }
</style>
