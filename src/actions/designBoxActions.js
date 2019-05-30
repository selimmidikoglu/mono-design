
export const changeTextAlignIcon =  (iconIndex) => {
    return  {
        type: "CHANGE_TEXT_ALIGN_ICON",
        payload: iconIndex
    }
}
export const changeStyleIcon =  (iconIndex) => {
    return  {
        type: "CHANGE_STYLE_ICON",
        payload: iconIndex
    }
}
export const openSliderHeight =  () => {
    return  {
        type: "OPEN_CLOSE_SLIDER_HEIGHT",
    }
}
export const openSliderWidth =  () => {
    return  {
        type: "OPEN_CLOSE_SLIDER_WIDTH",
    }
}