export const changeBackgroundColor =  (color) => {
    return  {
        type: "CHANGE_BACKGROUND_COLOR",
        payload: color
    }
}
export const changeBackgroundBorderRadius =  (radius) => {
    return  {
        type: "CHANGE_BACKGROUND_BORDER_RADIUS",
        payload: radius
    }
}
export const changeBackgroundOpacity =  (opacity) => {
    return  {
        type: "CHANGE_BACKGROUND_OPACITY",
        payload: opacity
    }
}
export const setBorderCircleOrNot =  (radius) => {
    return  {
        type: "SET_BORDER_CIRCLE_OR_NOT",
        payload: radius
    }
}

export const setBoxOrNot =  () => {
    return  {
        type: "SET_BOX_OR_NOT",
    }
}