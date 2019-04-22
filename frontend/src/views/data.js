async function fetchImages() {
  const images = (await import(/* webpackChunkName: "images.json" */ '@/../public/images/images.json')).default;
  for (const image of images) {
    image.ratio = image.height / image.width;
  }
  return images;
}

async function fetchTags() {
  const tags = (await import(/* webpackChunkName: "images.json" */ '@/../public/images/tags.json')).default;
  const images = await imagesPromise;

  for (const image of images) {
    if (!(image.name in tags)) {
      tags[image.name] = [];
    }
  }
  return tags;
}

export const imagesPromise = fetchImages();
export const tagsPromise = fetchTags();
