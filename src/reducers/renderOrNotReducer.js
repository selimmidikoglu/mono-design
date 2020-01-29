
let initialState = {
        renderImageContainer: true,
        renderBottomBar: true,
        renderTextDesignBar: false,
        renderTextColorDesignBar: false,
        keyboardOpen: false,
        renderShareScreen: false,
        renderSearchBox: false,
        renderPreviewScreen: false,
        renderImageContainerBeforePreview: false,
        renderBackgroundWindow:false,
        renderBackgroundWindowColor: false,
        renderBackgroundWindowOpacity: false,
        renderBoxBorderRadius: false,
        renderTextShadowDesign: false,
        renderTextShadowOpacity: false,
        renderTextShadowWidth: false,
        renderTextShadowHeight: false,
        renderTextShadowRadius: false,
        
}

export default renderOrNotReducer = (state = initialState, action) => {
    switch(action.type){
        case "RENDER_BOTTOM_BAR":
            if(state.renderBottomBar)
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:false,
                    renderTextDesignBar:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,
                    renderPreviewScreen: false,
                    renderBackgroundWindow:false,
                    renderBackgroundWindowColor: false,
                    renderBackgroundWindowOpacity: false,
                    renderTextShadowColor: false,
                    


                }
            else
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:true,
                    renderTextDesignBar:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,
                    renderPreviewScreen: false,
                    renderBackgroundWindow:false,
                    renderBackgroundWindowColor: false,
                    renderBackgroundWindowOpacity: false,

                }
            console.log(state);
            return state;
                
        case "RENDER_TEXT_DESIGN_BAR":
            state = 
            {...state,
                renderImageContainer: true,
                renderBottomBar:false,
                renderTextDesignBar:true,
                renderTextColorDesignBar: false,
                keyboardOpen: false,
                renderShareScreen: false,
                renderSearchBox: false,

            };
            console.log(state);
            return state;

        case "RENDER_COLOR_DESIGNER_BAR":
            state = 
            {...state,
                renderImageContainer: true,
                renderBottomBar:false,
                renderTextDesignBar:false,
                renderTextColorDesignBar: true,
                keyboardOpen: false,
                renderShareScreen: false,
                renderSearchBox: false,

            };
            console.log(state);
            return state;
        
        case "RENDER_KEYBOARD":
            state = 
            {...state,
                renderImageContainer: true,
                renderBottomBar:false,
                renderTextDesignBar:false,
                renderTextColorDesignBar: false,
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
                renderTextColorDesignBar: false,
                keyboardOpen: false,
                renderShareScreen: true,
                renderSearchBox: false,

            };
            console.log(state);
            return state;
        case "RENDER_SEARCH_BOX":
                
                if(state.renderSearchBox)
                    state = 
                    {...state,
                        renderSearchBox : false,
        
                    };
                else
                    state = 
                    {...state,
                        renderSearchBox : true,
        
                    };
                console.log(state);
                return state;
         case "RENDER_PREVIEW_SCREEN":
            if(!state.renderPreviewScreen){
                state = 
                    {...state,
                        renderBottomBar:false,
                        renderTextDesigner:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        //renderPreviewScreen: true,
                        renderPreviewScreen: true,
                        renderImageContainerBeforePreview :false,
                    };
                }
                else
                    state = 
                        {...state,
                            renderBottomBar:true,
                            renderTextDesigner:false,
                            renderTextColorDesignBar: false,
                            keyboardOpen: false,
                            renderShareScreen: false,
                            renderSearchBox: false,
                            renderPreviewScreen: false,
                            renderImageContainerBeforePreview:true,
    
                        };
                console.log(state);
                return state;
            case "RENDER_IMAGE_CONTAINER_BEFORE_PREVIEW":
                if(!state.renderImageContainerBeforePreview){
                    state = 
                        {...state,
                            renderImageContainer:true,
                            renderBottomBar:false,
                            renderTextDesigner:false,
                            renderTextColorDesignBar: false,
                            keyboardOpen: false,
                            renderShareScreen: false,
                            renderSearchBox: false,
                            renderPreviewScreen: false,
                            renderImageContainerBeforePreview: true
                        };
                    }
                    else
                        state = 
                            {...state,
                                renderImageContainer: false,
                                renderBottomBar:false,
                                renderTextDesigner:false,
                                renderTextColorDesignBar: false,
                                keyboardOpen: false,
                                renderShareScreen: false,
                                renderSearchBox: false,
                                renderPreviewScreen: false,
                                renderImageContainerBeforePreview: false
        
                            };
                    console.log(state);
                    return state; 
        case "RENDER_TEXT_COLOR_DESIGN_BAR":
            if(state.renderTextColorDesignBar)
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:true,
                    renderTextDesigner:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,

                };
            else
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:false,
                    renderTextDesigner:false,
                    renderTextColorDesignBar: true,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,

                };
            console.log(state);
            return state;
            case "RENDER_BACKGROUND_WINDOW":
            if(state.renderBackgroundWindow)
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:false,
                    renderTextDesignBar:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,
                    renderPreviewScreen: false,
                    renderBackgroundWindow: false,
                    renderBackgroundWindowOpacity: false,

                }
            else
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:false,
                    renderTextDesignBar:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,
                    renderPreviewScreen: false,
                    renderBackgroundWindow: true,
                    renderBackgroundWindowOpacity: false,

                }
            console.log(state);
            return state;
            case "RENDER_BACKGROUND_WINDOW_COLOR":
            if(state.renderBackgroundWindowColor)
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:false,
                    renderTextDesignBar:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,
                    renderPreviewScreen: false,
                    renderBackgroundWindow: true,
                    renderBackgroundWindowColor: false,

                }
            else
                state = 
                {...state,
                    renderImageContainer: true,
                    renderBottomBar:false,
                    renderTextDesignBar:false,
                    renderTextColorDesignBar: false,
                    keyboardOpen: false,
                    renderShareScreen: false,
                    renderSearchBox: false,
                    renderPreviewScreen: false,
                    renderBackgroundWindow: false,
                    renderBackgroundWindowColor: true,

                }
            console.log(state);
            return state;
            case "RENDER_BACKGROUND_WINDOW_OPACITY":
                if(state.renderBackgroundWindowOpacity)
                    state = 
                    {...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: true,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false
    
                    }
                else
                    state = 
                    {...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: true,
    
                    }
                console.log(state);
                return state;
            case "RENDER_BOX_BORDER_RADIUS":
                if(state.renderBoxBorderRadius){
                    state= {
                        ...state,
                        renderBackgroundWindow : true,
                        renderBoxBorderRadius: false,
                        
                    }
                }
                else{
                    state= {
                        ...state,
                        renderBackgroundWindow : false,
                        renderBoxBorderRadius: true,
                        
                    }
                }
                return state;
            case "RENDER_TEXT_SHADOW_DESIGN":
                if(state.renderTextShadowDesign){
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:true,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : false,                    
                    }
                }
                else{
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : true,
                    }
                }
                return state;
            case "RENDER_TEXT_SHADOW_COLOR":
                if(state.renderTextShadowColor){
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : true,
                        renderTextShadowColor: false                    
                    }
                }
                else{
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : false,
                        renderTextShadowColor: true  
                    }
                }
                return state; 
            case "RENDER_TEXT_SHADOW_OPACITY":
                if(state.renderTextShadowOpacity){
                    state= {
                         ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : true,
                        renderTextShadowOpacity: false                    
                    }
                }
                else{
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : false,
                        renderTextShadowOpacity: true  
                    }
                }
                return state;
            case "RENDER_TEXT_SHADOW_WIDTH":
                if(state.renderTextShadowWidth){
                    state= {
                        ...state,
                       renderImageContainer: true,
                       renderBottomBar:false,
                       renderTextDesignBar:false,
                       renderTextColorDesignBar: false,
                       keyboardOpen: false,
                       renderShareScreen: false,
                       renderSearchBox: false,
                       renderPreviewScreen: false,
                       renderBackgroundWindow: false,
                       renderBackgroundWindowColor: false,
                       renderBackgroundWindowOpacity: false,
                       renderTextShadowDesign : true,
                       renderTextShadowWidth: false                    
                   }
                }
                else{
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : false,
                        renderTextShadowWidth: true  
                    }
                }
                return state;
            case "RENDER_TEXT_SHADOW_HEIGHT":
                if(state.renderTextShadowHeight){
                    state= {
                        ...state,
                       renderImageContainer: true,
                       renderBottomBar:false,
                       renderTextDesignBar:false,
                       renderTextColorDesignBar: false,
                       keyboardOpen: false,
                       renderShareScreen: false,
                       renderSearchBox: false,
                       renderPreviewScreen: false,
                       renderBackgroundWindow: false,
                       renderBackgroundWindowColor: false,
                       renderBackgroundWindowOpacity: false,
                       renderTextShadowDesign : true,
                       renderTextShadowHeight: false                    
                   }
                }
                else{
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : false,
                        renderTextShadowHeight: true  
                    }
                }
            case "RENDER_TEXT_SHADOW_RADIUS":
                if(state.renderTextShadowRadius){
                    state= {
                        ...state,
                       renderImageContainer: true,
                       renderBottomBar:false,
                       renderTextDesignBar:false,
                       renderTextColorDesignBar: false,
                       keyboardOpen: false,
                       renderShareScreen: false,
                       renderSearchBox: false,
                       renderPreviewScreen: false,
                       renderBackgroundWindow: false,
                       renderBackgroundWindowColor: false,
                       renderBackgroundWindowOpacity: false,
                       renderTextShadowDesign : true,
                       renderTextShadowRadius: false                    
                   }
                }
                else{
                    state= {
                        ...state,
                        renderImageContainer: true,
                        renderBottomBar:false,
                        renderTextDesignBar:false,
                        renderTextColorDesignBar: false,
                        keyboardOpen: false,
                        renderShareScreen: false,
                        renderSearchBox: false,
                        renderPreviewScreen: false,
                        renderBackgroundWindow: false,
                        renderBackgroundWindowColor: false,
                        renderBackgroundWindowOpacity: false,
                        renderTextShadowDesign : false,
                        renderTextShadowRadius: true  
                    }
                } 
            default:
                return state;
    }

} 