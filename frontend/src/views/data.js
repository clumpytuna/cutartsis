import axios from 'axios';

async function fetchImages() {
  const images = (await axios.get('/images/content/images.json')).data;
  for (const image of images) {
    image.ratio = image.height / image.width;
  }
  return images;
}

async function fetchTags() {
  const tags = (await axios.get('/images/tags.json')).data;
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
