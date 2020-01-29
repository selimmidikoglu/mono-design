

let initialState ={
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius:0,
    textShadowColor: 'rgba(0,0,0,',
    textShadowOpacity: 1,
    disableFourButton: true
}

export default changeTextShadowReducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHANGE_TEXT_OFFSET_WIDTH':
            state={...state,textShadowOffset:{...state.textShadowOffset,width:action.payload}}
            return state;
        case 'CHANGE_TEXT_OFFSET_HEIGHT':
            state={...state,textShadowOffset:{...state.textShadowOffset,height:action.payload}}
            return state;
        case 'CHANGE_TEXT_SHADOW_RADIUS':
            state={...state,textShadowRadius:action.payload}
            return state;
        case 'CHANGE_TEXT_SHADOW_COLOR':
            console.log('new color'+ state.textShadowColor)
            state={...state,textShadowColor:action.payload}
            return state;
        case 'CHANGE_TEXT_SHADOW_OPACITY':
            state={...state,textShadowOpacity:action.payload}
            return state;
        default:
            return state;
    }
    

}