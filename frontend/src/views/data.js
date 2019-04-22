async function fetchImages() {
  const images = (await import(/* webpackChunkName: "images.json" */ '@/../public/images/images.json')).default;
  for (const image of images) {
    image.ratio = image.height / image.width;
    image.tags = image.tags || [];
  }
  images.forEach((image, index) => image.index = index);
  return images;
}

export const imagesPromise = fetchImages();
