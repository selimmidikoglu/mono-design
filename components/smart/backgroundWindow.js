import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
//redux
import {connect} from 'react-redux';
//actions
import {renderBoxBorderRadius,renderBottomBar,renderBackgroundWindow, renderBackgroundWindowColor, renderBackgroundWindowOpacity} from '../../src/actions/renderOrNotActions';
import {setBoxOrNot,changeBackgroundColor,setBorderCircleOrNot} from '../../src/actions/changeTextBackgroundActions';
//dimensions
import dimensionsObj from '../../dimensions';
//colors
import textColors from '../../constants/textColors';
//icons
import IconEntypo from 'react-native-vector-icons/Entypo';
//components
import BackgroundBoxOpacity from './backgroundBoxOpacity';
import BoxColorContainer from './boxColorContainer';
import BoxBorderRadius from './boxBorderRadius';
//custom icons
import CustomIcon from '../../icons/CustomIcon';
export class BackgroundWindow extends Component {

    render() {
        if(this.props.renderOrNotReducer.renderBackgroundWindow)
            return (
                    <View style={styles.container}>
                        <View style={styles.closeBar}>
                            <TouchableOpacity style= {{alignItems: 'center', justifyContent: 'center',width:'100%', borderBottomColor:'gray', borderBottomWidth: 0.6,height: 30,}} 
                                onPress={() => this.props.renderBottomBar() }>
                                <IconEntypo style= {{marginTop:5}} name="chevron-thin-down" size={19} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.firstRow}>
                           
                            <View style={styles.buttonContainerStyle}>
                                <TouchableOpacity onPress={() => this.props.renderBackgroundWindowColor()} disabled = {true}>
                                    <CustomIcon name="box-color" size={30} color="white"  />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.buttonContainerStyle]}>
                                <TouchableOpacity onPress={() =>this.props.renderBackgroundWindowOpacity()}>
                                    <CustomIcon name="box-opacity" size={30} color="white"  />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainerStyle}>
                                <TouchableOpacity onPress={() => this.props.setBorderCircleOrNot(0)}>
                                    <CustomIcon name="box-border-square" size={30} color={this.props.changeTextBackgroundReducer.colorsOfBorderButtons[0]}/>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.buttonContainerStyle]}>
                                <TouchableOpacity onPress={() => this.props.renderBoxBorderRadius()}>
                                    <CustomIcon name="box-border-circle" size={30} color={this.props.changeTextBackgroundReducer.colorsOfBorderButtons[1]}/>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonContainerStyle}>
                                {!this.props.changeTextBackgroundReducer.boxOrNot?
                                    (<TouchableOpacity disabled={this.props.changeTextBackgroundReducer.boxOrNotBottonAccessibility} onPress={() => this.props.setBoxOrNot()}>
                                        <CustomIcon name="box-enabled" size={30} color="white"  />
                                    </TouchableOpacity>):
                                    (<TouchableOpacity disabled={this.props.changeTextBackgroundReducer.boxOrNotBottonAccessibility} onPress={() => this.props.setBoxOrNot()}>
                                        <CustomIcon name="box-disabled" size={30} color="white"  />
                                    </TouchableOpacity>)
                                }
                            </View>
                        </View>
                    </View>
            )
        else if(this.props.renderOrNotReducer.renderBackgroundWindowColor)
            return (
                <BoxColorContainer/>
            )
        else if(this.props.renderOrNotReducer.renderBackgroundWindowOpacity)
            return (
                <BackgroundBoxOpacity/>
            )
        else if(this.props.renderOrNotReducer.renderBoxBorderRadius)
            return (
                <BoxBorderRadius/>
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
      renderBackgroundWindow,
      renderBackgroundWindowColor,
      renderBackgroundWindowOpacity,
      renderBottomBar,
      changeBackgroundColor,
      setBorderCircleOrNot,
      setBoxOrNot,
      renderBoxBorderRadius
      
    })(BackgroundWindow);
