import axios from 'axios';

async function fetchTags() {
  const tags = (await axios.get('/images/tags.json')).data;
  const images = await imagesPromise;

  for (const image of images) {
    if (!(image.image in tags)) {
      tags[image.image] = [];
    }
  }
  return tags;
}

export const imagesPromise = axios.get('/images/content/images.json').then(response => response.data);
export const tagsPromise = fetchTags();
