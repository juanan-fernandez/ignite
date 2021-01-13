export const getSmallImage = (imgPath, size) => {
   let image='https://chevroncommercial.com/image/no_image.jpg';
   if (imgPath) {
      image = imgPath.match(/media\/screeshots/) 
      ? imgPath.replace('media/screenshots', `media/resize/${size}/-/screenshots`) 
      : imgPath.replace('media/games', `media/resize/${size}/-/games`);
   }    
   return image;
}