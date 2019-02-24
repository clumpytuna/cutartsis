import store from '@/store';

// const IS_DEVELOPMENT = false;
const IS_DEVELOPMENT = window.location.hostname === 'localhost';
const USE_SERVER_IMAGES = true;
const MAX_WIDTH = 1500;

function getImageWidth(imageRelativeWidth) {
  const widthInCssPixels = store.state.pageWidth * imageRelativeWidth;
  const widthInRealPixels = widthInCssPixels * window.devicePixelRatio;
  // округляем до ближайших (сверху) 100px
  const imageWidth = Math.ceil(widthInRealPixels / 100) * 100;
  return Math.min(imageWidth, MAX_WIDTH);
}

export function getImageResizedUrl(imageUrl, imageRelativeWidth, imageAbsoluteWidth) {
  if (USE_SERVER_IMAGES) {
    imageUrl = 'https://cutartsis.com' + imageUrl;
  } else if (IS_DEVELOPMENT) {
    return imageUrl;
  }

  const imageWidth = getImageWidth(imageRelativeWidth);
  if (imageWidth >= imageAbsoluteWidth - 100) return imageUrl;  // изображения размера близкого к исходного специально не генерируются
  imageUrl = imageUrl.replace('.png', '.jpg');
  imageUrl = imageUrl.replace(' ', '%20');
  imageUrl = imageUrl.replace('/images/content/', `/images_resized/content/${imageWidth}/`);
  return imageUrl;
}
