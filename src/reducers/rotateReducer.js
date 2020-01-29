
let initialState = {
    degree: "0deg",
    rotatedDeg: '',
    gestureDegree: '0deg'
}

export default rotateReducer = (state = initialState, action) => {
    switch(action.type){

        /*case "CHANGE_ROTATE_DEGREE":
            var rotateInt= parseFloat(state.gestureDegree.substring(0,state.gestureDegree.length-3));
            rotateInt = -1 * rotateInt;
            rotateStr = rotateInt.toString() + "deg";
            state = {...state,gestureDegree: rotateStr}
            console.log("Gesture Degree " +  state.rotateStr);
            return state;*/
        case "CHANGE_ROTATE_DEGREE":
                state = {...state,gestureDegree: "0deg"}
                console.log("girdi ama degısmedi" + state.gestureDegree)
                return state;
        case "GET_ROTATE_DEGREE":
            state={...state,gestureDegree:action.payload}
            console.log("Gesture Degree " + state.gestureDegree);
            return state;
        default:
            return state;
    }

} 