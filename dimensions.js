import { Dimensions } from 'react-native';
var {height,width} = Dimensions.get ("window");

export default dimensionsObj = {
    width:width,
    height: height,
    designBoxHeight: height*1/7,
    designBoxWidth: width-50,
    imageBoxHeight: height,
    imageBoxWidth: width,
    designBarHeight: height*1/7,
    designBarWidth: width-50,
    designBarButtonHeight: height*1/14,
    searchBoxWidth: width-50,
    searchBoxHeight: height* 1/14-5,
    //Text Color Picker
    textColorPickerBoxHeight: height*1/7,
    textColorPickerBoxWidth: width-50,
    texColorPickerRowHeight: height*1/14,
    //oneColorHeight:(height*(1/7)*(3/7))-5,
    oneColorHeight: 30,
    baseColorText: height*1/7*1/7-5,
    shareAndBackButtonHeight: height*1/11,
    shareAndBackButtonWidth: width,
    shareAndBackButtonBorderRadius: height*1/22,
    colorHeight: ((height*1/7)*3/7)-10,
    


     
}