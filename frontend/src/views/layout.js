import axios from 'axios';

export const imagesPromise = axios.get('/images/content/images.json').then(response => response.data);

function createColumnsGroup(images, numberColumns) {
  const heights = Array(numberColumns).fill(0);
  const columns = Array(numberColumns).fill(null).map(() => []);
  for (const image of images) {
    const heightNormalized = image.height / image.width;
    const column = heights.indexOf(Math.min(...heights));
    heights[column] += heightNormalized;
    columns[column].push(image);
  }
  return columns;
}

export default async function getColumns(numberColumns) {
  const images = await imagesPromise;
  const imagesHorizontal = images.filter(({ height, width }) => height < width);
  const imagesVertical = images.filter(({ height, width }) => height >= width);

  const columnsHorizontal = createColumnsGroup(imagesHorizontal, Math.floor(numberColumns / 2));
  const columnsVertical = createColumnsGroup(imagesVertical, Math.floor((numberColumns + 1) / 2));
  const getColumnByIndex = i => (i % 2 === 0 ? columnsVertical : columnsHorizontal)[Math.floor(i / 2)];
  return Array(numberColumns).fill(null).map((_, i) => getColumnByIndex(i));
}
