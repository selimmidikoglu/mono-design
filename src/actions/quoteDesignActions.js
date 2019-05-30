

export const changeFontFamily =  (newFontFamily) => {
    return  {
        type: "CHANGE_FONT_FAMILY",
        payload: newFontFamily
    }
}

export const changeTextAlign =  (newAlign) => {
    return  {
        type: "CHANGE_TEXT_ALIGN",
        payload: newAlign
    }
}
export const changeColor = (color) => {
    return {
        type: "CHANGE_COLOR",
        payload: color
    }
}

export const changeFontWidth =  (width) => {
    return  {
        type: "CHANGE_TEXT_WIDTH",
        payload: width
    }
}

export const changeFontHeight =  (height) => {
    return  {
        type: "CHANGE_FONT_HEIGHT",
        payload: height
    }
}

export const changeTextStyle =  (style) => {
    return  {
        type: "CHANGE_FONT_STYLE",
        payload: style
    }
}