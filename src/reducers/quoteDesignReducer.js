import fontsArray from '../../constants/fonts';
import dimensionsObj from '../../dimensions';
let initialState = {
    textColor: 'white',
    textFontFamily : fontsArray[0].style.regular,
    textStyle: [false,true],
    textWidth: dimensionsObj.width-100,
    textHeight: 0,
    textAlign : 'center',
    textFontSize: 20,
    underline:false,
    fontIndex:0,
    textBoldOrItalic:{
        bold: false,
        italic: false,
    },
    letterCase:'none',
    letterCaseButtonColor: 'white'

}

export default quoteDesignReducer = (state = initialState, action) => {
    switch(action.type){
        case "CHANGE_COLOR":
            state = {...state,textColor:action.payload};
            console.log(state);
            return state;
        case "CHANGE_FONT_FAMILY":
            state = {...state,fontIndex:action.payload,textFontFamily:fontsArray[action.payload].style.regular};
            return state;
        case "CHANGE_TEXT_STYLE":
            console.log("Text Style a girdi ---------------------------")
            //BOLD CLICK COMPARISON
            if(state.textBoldOrItalic.bold == false && action.payload == "bold")
            {
                if(state.italic == true)
                    {
                        console.log("1.bold: ",fontsArray[state.fontIndex].style.bold_italic);
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,bold:true},textFontFamily:fontsArray[state.fontIndex].style.bold_italic};
                    }
                else
                    {
                        console.log("2.bold: ",fontsArray[state.fontIndex].style.bold);
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,bold:true},textFontFamily:fontsArray[state.fontIndex].style.bold};
                    }
            }
            else if(state.textBoldOrItalic.bold == true && action.payload == "bold")
            {
                if(state.italic == true)
                    {
                        console.log("1*.bold: ",fontsArray[state.fontIndex].style.italic);
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,bold:false},textFontFamily:fontsArray[state.fontIndex].style.italic};
                    }
                else
                    {
                        console.log("2*.bold: ",fontsArray[state.fontIndex].style.regular);
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,bold:false},textFontFamily:fontsArray[state.fontIndex].style.regular};
                    }
            }
            //ITALIC CLICK COMPARISON
            if(state.textBoldOrItalic.italic == false && action.payload == "italic")
            {
                if(state.bold == true)
                    {   
                        console.log("1.italic: ",fontsArray[state.fontIndex].style.bold_italic)
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,italic:true},textFontFamily:fontsArray[state.fontIndex].style.bold_italic};
                    }
                else
                    {
                        console.log("2.italic: ",fontsArray[state.fontIndex].style.italic)
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,italic:true},textFontFamily:fontsArray[state.fontIndex].style.italic};
                    }
            }
            else if(state.textBoldOrItalic.italic == true && action.payload == "italic")
            {
                if(state.bold == true)
                    {   
                        console.log("1*.italic: ",fontsArray[state.fontIndex].style.bold)
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,italic:false},textFontFamily:fontsArray[state.fontIndex].style.bold};
                    }
                else
                    {
                        console.log("2*.italic: ",fontsArray[state.fontIndex].style.regular)
                        state = {...state,textBoldOrItalic:{...state.textBoldOrItalic,italic:false},textFontFamily:fontsArray[state.fontIndex].style.regular};
                    }
            }
            return state;
        case "CHANGE_TEXT_ALIGN":
            state = {...state,textAlign:action.payload};
            return state;
        case "CHANGE_TEXT_WIDTH":
            state = {...state,textWidth:action.payload};
            return state;
        case "CHANGE_TEXT_HEIGHT":
            state = {...state,textHeight:action.payload};
            return state;
        case "CHANGE_FONT_SIZE":
            state = {...state,textFontSize:action.payload};
        case "CHANGE_FONT_UNDERLINE":
            if(state.underline)
                state = {...state,underline:false};
            else
                state = {...state,underline:true};
            return state;
        case "CHANGE_TEXT_STYLE_ACCESIBILITY":
            if(fontsArray[action.payload].style.bold == false && fontsArray[action.payload].style.italic == false)
                state= {...state,textStyle:[true,true]};
            else if(fontsArray[action.payload].style.bold !== false && fontsArray[action.payload].style.italic !== false)
                state= {...state,textStyle:[false,false]};
            else if(fontsArray[action.payload].style.bold == false && fontsArray[action.payload].style.italic !== false)
                state= {...state,textStyle:[true,false]}
            else if(fontsArray[action.payload].style.bold !== false && fontsArray[action.payload].style.italic == false)
                state= {...state,textStyle:[false,true]}
            return state;
        case "CHANGE_LETTER_CASE":
            if(state.letterCase == 'characters')
                state= {...state,letterCase:'none',letterCaseButtonColor:'white'}
            else
                state= {...state,letterCase:'characters',letterCaseButtonColor:'#37474f'}


        default:
            return state;
    }

} 