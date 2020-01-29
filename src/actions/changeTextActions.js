export const changeText =  (text) => {
    return  {
        type: "CHANGE_TEXT",
        payload: text
    }
}
export const changeCase =  () => {
    return  {
        type: "CHANGE_CASE",
    }
}