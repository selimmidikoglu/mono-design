

let initialState = {
    textColor: 'blue',
    textFontFamily : '',
    textStyle: '',
    textWidth: 200,
    textHeight: 0,
    textAlign : 'center',
    textFontSize: 20

}

export default quoteDesignReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE_COLOR":
            state = {...state,textColor:action.payload};
            console.log(state);
            return state;
        case "CHANGE_FONT_FAMILY":
            state = {...state,textFontFamily:action.payload};
            return state;
        case "CHANGE_TEXT_STYLE":
            state = {...state,textStyle:action.payload};
            return state;
        case "CHANGE_TEXT_ALIGN":
            state = {...state,textAlign:action.payload};
            return state;
        case "CHANGE_TEXT_WIDTH":
            state = {...state,textWidth:action.payload};
            return state;
        case "CHANGE_TEXT_HEIGHT":
            state = {...state,textHeight:action.payload};
            return state;
        case "CHANGE_FONT_SIZE":
            state = {...state,textFontSize:action.payload};
        default:
            return state;
    }

} 