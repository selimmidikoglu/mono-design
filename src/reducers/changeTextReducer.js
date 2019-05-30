let initialState = {
    text : 'Write down something to feel better'
}

export default changeTextReducer = (state = initialState, action) => {
    switch(action.type){

        case "CHANGE_TEXT":
            state = {...state,text:action.payload};
            return state;
            
        default:
            return state;
    }

} 