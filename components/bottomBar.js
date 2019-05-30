import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome  from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
//dimensions
import dimensionsObj from '../dimensions';
//redux
import { connect } from 'react-redux';
//actions
import {renderBottomBar,renderTextDesignBar} from '../src/actions/renderOrNotActions';


class BottomBar extends Component {
    render() {
        console.log(this.props);
        if(this.props.renderOrNotReducer.renderBottomBar)
            return(
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=>this.props.renderTextDesignBar()} >
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconFoundation name="text-color" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View> 
                    </View>
                    <View style={styles.row}>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconFoundation name="text-color" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity>
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View> 
                    </View>  
                </View>
            )
        else
            return null;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        height:dimensionsObj.designBarHeight,
        width:dimensionsObj.designBarWidth,
        backgroundColor: 'black'
    },
    row :{
        flexDirection:'row',
        height: dimensionsObj.designBarButtonHeight,
        width: dimensionsObj.designBarWidth,
    },
    button : {
        width: dimensionsObj.designBarWidth*1/4,
        height: dimensionsObj.designBarButtonHeight,
        alignItems: 'center',
        justifyContent:'center',
        borderColor: 'white',
        borderWidth: 1,
    },
    icon :{
         color:'white',
    }
})

mapStateToProps = (state) => {
    return state
  }
  export default connect(mapStateToProps,
    {
      renderBottomBar,
      renderTextDesignBar
      
    })(BottomBar);