function comparator(image1, image2) {
  const length = Math.max(image1.name.length, image2.name.length);
  const name1 = image1.name.padStart(length, '0');
  const name2 = image2.name.padStart(length, '0');
  return name1.localeCompare(name2);
}

async function fetchImages() {
  const images = (await import(/* webpackChunkName: "images.json" */ '@/../public/images/images.json')).default;
  for (const image of images) {
    image.ratio = image.height / image.width;
    image.tags = image.tags || [];
  }
  images.sort(comparator);
  images.forEach((image, index) => image.index = index);
  return images;
}

export const imagesPromise = fetchImages();
