export const changePrevUri = (uri) => {
    console.log("Fuckin uri is",uri)
    return {
        type: "CHANGE_URI",
        payload: uri
    }
    
}