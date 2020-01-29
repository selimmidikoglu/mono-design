export const addNewListOfImages = (images) => {
    return{
        type:"ADD_NEW_LIST_OF_IMAGES",
        payload:images
    }
}
export const getImageKey = (key) => {
    return {
        type:"GET_IMAGE_KEY",
        payload:key
    }
}
export const addImagesFromDevice = (addedImages) => {
    return {
        type:"ADD_IMAGES_FROM_DEVICE",
        payload:addedImages
    }
}

