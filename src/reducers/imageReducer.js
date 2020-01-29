let initialState = {
    images : [],
    key : 'forests',
    addedImages :[],


}

export default imageReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NEW_LIST_OF_IMAGES":
            state = {...state,images:action.payload};
            return state;

        case "GET_IMAGE_KEY":
                state = {...state,key:action.payload};
                console.log("State.key from reducer is " + state.key);
                return state;
        case "ADD_IMAGES_FROM_DEVICE":
            state = {...state,addedImages: action.payload};
            return state;   
        default:
            return state;
    }

} 