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
    designBarButtonHeight: height*1/14
     
}