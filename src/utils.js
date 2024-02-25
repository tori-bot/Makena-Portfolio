//get path of image and pass it as a method hence 
//dynamically import images into different components

export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`,import.meta.url).href;
};