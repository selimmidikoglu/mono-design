let initialState = {
    selectedFont:'Montserrat-Regular',
    textAlignLogo: ['white','white','white'],
    fontStyleLogo: ['white','white','white'],
    sliderHeightOpened : false,
    sliderWidthOpened : false
}

export default quoteDesignReducer = (state = initialState, action) => {
    switch(action.type){

        case "CHANGE_SELECTED_FONT_LABEL":
            state = {...state,textFontFamily:action.payload};
            return state;

        case "CHANGE_TEXT_ALIGN_ICON":
            if(action.payload === 0){
                state = {...state,textAlignLogo:['#37474f','white','white']};
            }
            else if(action.payload === 1){
                state = {...state,textAlignLogo:['white','#37474f','white']};
            }
            else {
                state = {...state,textAlignLogo:['white','white','#37474f']};
            }
            return state;
        
        case "CHANGE_STYLE_ICON":
            if(action.payload === 0){
                state = {...state,fontStyleLogo:['#37474f','white','white']};
            }
            else if(action.payload === 1){
                state = {...state,fontStyleLogo:['white','#37474f','white']};
            }
            else {
                state = {...state,fontStyleLogo:['white','white','#37474f']};
            }
            return state;

        case "OPEN_CLOSE_SLIDER_HEIGHT":
            if(state.sliderHeightOpened == false)
                state = {...state,sliderHeightOpened: true};
            else
                state = {...state,sliderHeightOpened: false};
            return state;

        case "OPEN_CLOSE_SLIDER_WIDTH":
            if(state.sliderHeightOpened === false)
                state = {...state,sliderWidthOpened: true};
            else
                state = {...state,sliderWidthOpened: false};
            return state;
            
        default:
            return state;
    }

} 