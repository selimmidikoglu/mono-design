import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
//redux
import {connect} from 'react-redux';
//actions
import {renderTextShadowDesign, renderTextShadowColor,renderTextShadowHeight,renderTextShadowOpacity,renderTextShadowWidth,renderTextShadowRadius,renderBottomBar} from '../../src/actions/renderOrNotActions';
import {setBoxOrNot,changeBackgroundColor,setBorderCircleOrNot} from '../../src/actions/changeTextBackgroundActions';
//dimensions
import dimensionsObj from '../../dimensions';
//colors
import textColors from '../../constants/textColors';
//icons
import IconEntypo from 'react-native-vector-icons/Entypo';
//components
import TextShadowColor from './textShadowColor';
import TextShadowOffsetWidth from './textShadowOffsetWidth';
import TextShadowOffsetHeight from './textShadowOffsetHeight';
import TextShadowOpacity from './textShadowOpacity';
import TextShadowRadius from './textShadowRadius';
//custom icons
import CustomIcon from '../../icons/CustomIcon';
export class TextShadowDesign extends Component {

    render() {
        if(this.props.renderOrNotReducer.renderTextShadowDesign)
            return (
                    <View style={styles.container}>
                        <View style={styles.closeBar}>
                            <TouchableOpacity style= {{alignItems: 'center', justifyContent: 'center',width:'100%', borderBottomColor:'gray', borderBottomWidth: 0.6,height: 30,}} 
                                onPress={() => this.props.renderTextShadowDesign() }>
                                <IconEntypo style= {{marginTop:5}} name="chevron-thin-down" size={19} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.firstRow}>
                            <View style={styles.buttonContainerStyle}>
                                <TouchableOpacity onPress={() => this.props.renderTextShadowRadius()}>
                                    <CustomIcon name="text-shadow-border-radius" size={40} color="white"  />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainerStyle}>
                                <TouchableOpacity onPress={() => this.props.renderTextShadowColor()}>
                                    <CustomIcon name="text-shadow-color" size={40} color="white"  />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.buttonContainerStyle]}>
                                <TouchableOpacity onPress={() =>this.props.renderTextShadowOpacity()}>
                                    <CustomIcon name="text-shadow-opacity" size={40} color="white"  />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainerStyle}>
                                <TouchableOpacity onPress={() => this.props.renderTextShadowWidth()}>
                                    <CustomIcon name="text-shadow-width" size={40} color='white'/>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.buttonContainerStyle]}>
                                <TouchableOpacity onPress={() => this.props.renderTextShadowHeight()}>
                                    <CustomIcon name="text-shadow-height" size={40} color="white"/>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
            )
        else if(this.props.renderOrNotReducer.renderTextShadowColor)
            return (
                <TextShadowColor/>
            )
        else if(this.props.renderOrNotReducer.renderTextShadowOpacity)
            return (
                <TextShadowOpacity/>
            )
        else if(this.props.renderOrNotReducer.renderTextShadowWidth)
            return (
                <TextShadowOffsetWidth/>
            )
        else if(this.props.renderOrNotReducer.renderTextShadowHeight)
            return (
                <TextShadowOffsetHeight/>
            )
        else if(this.props.renderOrNotReducer.renderTextShadowRadius)
            return (
                <TextShadowRadius/>
            )
        else  
                return null;
        
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        height:dimensionsObj.textColorPickerBoxHeight,
        width: dimensionsObj.textColorPickerBoxWidth,
        backgroundColor: 'rgba(0,0,0,.7)',
        borderRadius: 10,
        zIndex:1,
        position:'absolute'
    },
    closeBar: {
        flex:1,
        width: dimensionsObj.designBoxWidth,
        alignItems: 'center',
        justifyContent:'center'
    },
    firstRow: {
        flex:6,
        width:dimensionsObj.width,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    secondRow :{
        flex:3,
        width:dimensionsObj.width,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    buttonStyle: {

    },
    buttonContainerStyle:{
        alignItems: 'center',
        justifyContent:'center',
        height:dimensionsObj.designBarButtonHeight,
        color:'white'
    }
})

mapStateToProps = (state) => {
    return state
  }
  export default connect(mapStateToProps,
    {
      renderTextShadowDesign,
      renderTextShadowColor,
      renderTextShadowHeight,
      renderTextShadowOpacity,
      renderTextShadowWidth,
      renderTextShadowRadius,
      renderBottomBar,
      
    })(TextShadowDesign);
