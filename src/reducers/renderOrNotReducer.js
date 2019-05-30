
let initialState = {
        renderBottomBar: true,
        renderTextDesignBar: false,
        renderColorDesignBar: false,
        keyboardOpen: false,
        renderShareScreen: false,
}

export default renderOrNotReducer = (state = initialState, action) => {
    switch(action.type){
        case "RENDER_BOTTOM_BAR":
            state = 
            {...state,
                renderBottomBar:true,
                renderTextDesignBar:false,
                renderColorDesignBar: false,
                keyboardOpen: false,
                renderShareScreen: false,

            };
            console.log(state);
            return state;

        case "RENDER_TEXT_DESIGN_BAR":
            state = 
            {...state,
                renderBottomBar:false,
                renderTextDesignBar:true,
                renderColorDesignBar: false,
                keyboardOpen: false,
                renderShareScreen: false,

            };
            console.log(state);
            return state;

        case "RENDER_COLOR_DESIGNER_BAR":
            state = 
            {...state,
                renderBottomBar:false,
                renderTextDesignBar:false,
                renderColorDesignBar: true,
                keyboardOpen: false,
                renderShareScreen: false,

            };
            console.log(state);
            return state;
        
        case "RENDER_KEYBOARD":
            state = 
            {...state,
                renderBottomBar:false,
                renderTextDesignBar:false,
                renderColorDesignBar: false,
                keyboardOpen: true,
                renderShareScreen: false,

            };
            console.log(state);
            return state;
        
        case "RENDER_SHARE_SCREEN":
            state = 
            {...state,
                renderBottomBar:false,
                renderTextDesigner:false,
                renderColorDesignBar: false,
                keyboardOpen: false,
                renderShareScreen: true,

            };
            console.log(state);
            return state;
        default:
            return state;
    }

} 