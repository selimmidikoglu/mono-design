

let initialState = {
    color: 'rgba(0,0,0,0)',
    prevColor: '',
    borderRadius: 0,
    opacity: 1,
    colorsOfBorderButtons:['white','white'],
    boxOrNot: false,
    prevOpacity: 0,
    boxOrNotBottonAccessibility: true,
}

export default changeTextBackgroundReducer = (state = initialState, action) => {
    switch(action.type){

        case "CHANGE_BACKGROUND_COLOR":
            state = {...state,color:action.payload,boxOrNot:true,boxOrNotBottonAccessibility:false};
            return state;
        case "CHANGE_BACKGROUND_BORDER_RADIUS":
            state = {...state,borderRadius:action.payload};
            return state;
        case "CHANGE_BACKGROUND_OPACITY":
            state = {...state,opacity:action.payload};
            return state;
        case "SET_BORDER_CIRCLE_OR_NOT":
            
            if(action.payload == 0)
                {
                    state = {...state,borderRadius:0,colorsOfBorderButtons:['#37474f','white']};
                    console.log(state.borderRadius,"Kare");
                }
            else if(action.payload !==0)
                {
                    state = {...state,borderRadius:action.payload,colorsOfBorderButtons:['white','#37474f']}
                    console.log(state.borderRadius,"Çember");
                }
            return state;
        case "SET_BOX_OR_NOT":
            if(state.boxOrNot)
            {   state = {...state,boxOrNot:false,prevColor:state.color,prevOpacity: state.opacity,color:'rgba(0,0,0,',opacity:0}
                console.log(state);
            }
            else
                state = {...state,boxOrNot:true,prevColor:'',prevOpacity:0,color:state.prevColor,opacity:state.prevOpacity}
            return state;
        default:
            return state;
    }

} 