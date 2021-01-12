export const getSmallImage = (imgPath, size) => {
   const image = imgPath.match(/media\/screeshots/) 
               ? imgPath.replace('media/screenshots', `media/resize/${size}/-/screenshots`) 
               : imgPath.replace('media/games', `media/resize/${size}/-/games`);
   return image;
}