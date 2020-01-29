
export const changeTextShadowOffsetWidth =  (width) => {
    return  {
        type: "CHANGE_TEXT_OFFSET_WIDTH",
        payload: width
    }
}
export const changeTextShadowOffsetHeight =  (height) => {
    return  {
        type: "CHANGE_TEXT_OFFSET_HEIGHT",
        payload: height
    }
}

export const changeTextShadowRadius =  (radius) => {
    return  {
        type: "CHANGE_TEXT_SHADOW_RADIUS",
        payload: radius
    }
}

export const changeTextShadowColor =  (color) => {
    console.log("kasljkdajds")
    return  {
        type: "CHANGE_TEXT_SHADOW_COLOR",
        payload: color
    }
}

export const changeTextShadowOpacity =  (opacity) => {
    return  {
        type: "CHANGE_TEXT_SHADOW_OPACITY",
        payload: opacity
    }
}