const getImagesFromArray = (array) => {
    let images = [];

    array.forEach(element => {
        images.push(element.image);
    });

    return images;
}

export default getImagesFromArray;