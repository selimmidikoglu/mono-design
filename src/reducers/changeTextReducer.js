
let initialState = {
    text : 'Write down something',
    letterCase: false,
    previousText: ''
}

export default changeTextReducer = (state = initialState, action) => {
    switch(action.type){

        case "CHANGE_TEXT":
            state = {...state,previuosText:action.payload,text:action.payload};
            return state;
        case "CHANGE_CASE":
                if(state.letterCase == false)
                {
                    var str = state.text.toUpperCase();
                    console.log("STR" + str);
                    state={...state,previousText: state.text,text:str,letterCase:true}
                }
                else{
                    state={...state,text:state.previousText,letterCase:false}
                }
                return state;
            
        default:
            return state;
    }

}

