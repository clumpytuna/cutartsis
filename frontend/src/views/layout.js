// у нас пять столбиков, два широких и три узких
// мы бы хотели размещать горизонтальные картинки (у которых ширина больше высоты) в широкие столбики
// но также чтобы высота всех столбиков была примерно одинаковой
function splitImages(images) {
  // изначально все картинки в узких колонках
  images.sort((image1, image2) => image2.ratio - image1.ratio);
  const imagesRatioSum = images.reduce((sum, image) => sum + image.ratio, 0);

  const columns = [[...images], []];
  const columnCounts = [3, 2];
  // все размеры в (vw/100)
  const columnWidths = [19.8 / 128.1, 28.25 / 128.1];
  const columnHeights = [columnWidths[0] * imagesRatioSum, 0];

  function getTotalColumnHeight(i) {
    const imagesHeight = columnHeights[i];
    const numberImages = columns[i].length;
    const marginHeight = (numberImages - 1) * 2 / 128;
    return (imagesHeight + marginHeight) / columnCounts[i];
  }

  while (getTotalColumnHeight(0) > getTotalColumnHeight(1)) {
    const image = columns[0].pop();
    columns[1].push(image);
    columnHeights[0] -= image.ratio * columnWidths[0];
    columnHeights[1] += image.ratio * columnWidths[1];
  }
  return columns;
}

function createColumnsGroup(images, numberColumns) {
  const heights = Array(numberColumns).fill(0);
  const columns = Array(numberColumns).fill(null).map(() => []);
  for (const image of images) {
    const heightNormalized = image.ratio;
    const column = heights.indexOf(Math.min(...heights));
    heights[column] += heightNormalized;
    columns[column].push(image);
  }
  return columns;
}

export default function getColumns(images, numberColumns) {
  const [imagesVertical, imagesHorizontal] = splitImages(images);
  for (const images of [imagesVertical, imagesHorizontal]) {
    images.sort((image1, image2) => image1.name.localeCompare(image2.name));
    images.sort((image1, image2) => image2.index - image1.index);
  }

  const columnsHorizontal = createColumnsGroup(imagesHorizontal, Math.floor(numberColumns / 2));
  const columnsVertical = createColumnsGroup(imagesVertical, Math.floor((numberColumns + 1) / 2));
  const getColumnByIndex = i => (i % 2 === 0 ? columnsVertical : columnsHorizontal)[Math.floor(i / 2)];
  return Array(numberColumns).fill(null).map((_, i) => getColumnByIndex(i));
}

