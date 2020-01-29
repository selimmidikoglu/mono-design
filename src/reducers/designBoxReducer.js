

let initialState = {
    selectedFont:'Montserrat-Regular',
    textAlignLogo: ['white','white','white'],
    fontStyleLogo: ['white','white','white'],
    boldColor: 'white',
    italicColor: 'white',
    underlineColor : 'white',
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
                if(state.boldColor === 'white')
                    state = {...state,boldColor:'#37474f'};
                else
                    state = {...state,boldColor:'white'};
                return state;
            }
            else if(action.payload === 1){
                if(state.italicColor === 'white')
                    state = {...state,italicColor:'#37474f'};
                else
                    state = {...state,italicColor:'white'};
                return state;
            }
            else if(action.payload === 2) {
                if(state.underlineColor === 'white')
                    state = {...state,underlineColor:'#37474f'};
                else
                    state = {...state,underlineColor:'white'};
                return state;
            }
            return state;

        case "OPEN_CLOSE_SLIDER_HEIGHT":
            if(state.sliderHeightOpened == false)
                state = {...state,sliderHeightOpened: true};
            else
                state = {...state,sliderHeightOpened: false};
            return state;

        case "OPEN_CLOSE_SLIDER_WIDTH":
            if(state.sliderWidthOpened == false)
                state = {...state,sliderWidthOpened: true};
            else
                state = {...state,sliderWidthOpened: false};
            return state;
            
        default:
            return state;
    }

} 