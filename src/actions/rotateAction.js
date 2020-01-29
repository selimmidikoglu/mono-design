export const changeRotateDegree = (degree) => {
    return {
        type: "CHANGE_ROTATE_DEGREE",
        payload: degree
    }
    
}
export const getRotateDegree = (degree) => {
    return {
        type: "GET_ROTATE_DEGREE",
        payload: degree
    }
    
}