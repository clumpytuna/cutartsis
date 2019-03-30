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
  if (IS_DEVELOPMENT) {
    if (USE_SERVER_IMAGES) {
      imageUrl = 'https://cutartsis.com' + imageUrl;
    } else {
      return imageUrl;
    }
  }

  imageUrl = imageUrl.replace(' ', '%20');
  const imageWidth = getImageWidth(imageRelativeWidth);
  // иначе не заменяем, так как, например, на ретине картинке приходится растягиваться (для 42.jpg на ноутбуке Михаила — примерно в 1.25 раз)
  if (imageWidth < imageAbsoluteWidth * 1.1) {
    imageUrl = imageUrl.replace('.png', '.jpg');
  }
  if (imageWidth >= imageAbsoluteWidth - 100) return imageUrl;  // изображения размера близкого к исходному специально не генерируются
  imageUrl = imageUrl.replace('/images/content/', `/images/content/${imageWidth}/`);
  return imageUrl;
}
