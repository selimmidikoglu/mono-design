import { captureRef } from "react-native-view-shot";

let initialState = {
    uri:null,
    ref:''
}

export default prevReducer = (state = initialState, action) => {
    switch(action.type){

        case "CHANGE_URI":
            
                state = {...state,uri:action.payload}
               
            return state;
            
        default:
            return state;
    }

} 