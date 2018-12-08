import store from '@/store';

// const IS_DEVELOPMENT = false;
const IS_DEVELOPMENT = window.location.hostname === 'localhost';

function getImageWidth(imageRelativeWidth) {
  const widthInCssPixels = store.state.pageWidth * imageRelativeWidth;
  const widthInRealPixels = widthInCssPixels * window.devicePixelRatio;
  // округляем до ближайших (сверху) 100px
  return Math.ceil(widthInRealPixels / 100) * 100;
}

export function getImageResizedUrl(imageUrl, imageRelativeWidth) {
  if (IS_DEVELOPMENT) return imageUrl;

  const imageWidth = getImageWidth(imageRelativeWidth);
  imageUrl = imageUrl.replace('.png', '.jpg');
  imageUrl = imageUrl.replace(' ', '%20');
  imageUrl = imageUrl.replace('/images/', `/images_resized/${imageWidth}/`);
  return imageUrl;
}
