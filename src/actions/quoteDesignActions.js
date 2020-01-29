
export const changeFontFamily =  (index) => {
    return  {
        type: "CHANGE_FONT_FAMILY",
        payload: index
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

export const changeTextWidth =  (width) => {
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
        type: "CHANGE_TEXT_STYLE",
        payload: style
    }
}

export const changeFontSize=  (fontSize) => {
    return  {
        type: "CHANGE_FONT_SIZE",
        payload: fontSize
    }
}

export const changeTextUnderline = () => {
    return {
        type: "CHANGE_FONT_UNDERLINE"
    }
}

export const changeTextAccessibility = (index) => {
    return {
        type: "CHANGE_TEXT_STYLE_ACCESIBILITY",
        payload: index
    }
}

export const changeLetterCase = () => {
    return {
        type: "CHANGE_LETTER_CASE",
    }
}