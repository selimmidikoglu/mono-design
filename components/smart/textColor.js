import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
//Color Array
import textColors from '../../constants/textColors';
//icons
import IconEntypo from 'react-native-vector-icons/Entypo';
//redux connect
import {connect} from 'react-redux';
//actions
import {renderTextColorDesign} from '../../src/actions/renderOrNotActions';
import {changeColor} from '../../src/actions/quoteDesignActions'
import dimensionsObj from '../../dimensions';


class TextDesignBar extends Component {
  constructor(props) {
    super(props);
    colors = textColors.reverse();
    this.state = {
        index: 0
    };
    console.log(colors);
  }

  render() {
    if(!this.props.renderOrNotReducer.renderTextColorDesignBar)
        return null;
    else
        return (
        <View style={styles.container}>
            <View style={styles.closeBar}>
                <TouchableOpacity style= {{alignItems: 'center', justifyContent: 'center',width:'100%', borderBottomColor:'gray', borderBottomWidth: 0.6}} 
                    onPress={() => this.props.renderTextColorDesign() }>
                    <IconEntypo style= {{marginTop:5}} name="chevron-thin-down" size={19} color="white"/>
                </TouchableOpacity>
            </View>
            {/*<View style={styles.baseColorText}>
                <Text style={{fontSize:dimensionsObj.baseColorText,color:'white'}}>Base Color</Text>
               </View>*/}
            <View style={styles.baseColor}>
                <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center'}} horizontal={true}>
                    {textColors.map((color,index) =>(
                        
                        <TouchableOpacity key={index} onPress={() => {console.log("ındex ",textColors[index]);
                        this.setState({index:index})}}>
                            <View style={[styles.color,{backgroundColor:color.baseColor,marginLeft:10}]}></View>
                        </TouchableOpacity>
                        
                    ))}
                </ScrollView>
            </View>
            {/*<View style={styles.spanColorText}>
                <Text style={{fontSize:dimensionsObj.baseColorText,color:'white'}}>Span Color</Text>
               </View>*/}
            <View style={styles.spanColor}>
                <ScrollView contentContainerStyle={{alignItems:'center',justifyContent:'center'}} horizontal={true}>
                    {textColors[this.state.index].colorSpanArray.map((color,index) =>(
                        <TouchableOpacity key={color} onPress={() => this.props.changeColor(color)}>
                            <View style={[styles.color,{backgroundColor:color,margin:5}]}></View>
                        </TouchableOpacity>
                        
                    ))}
                </ScrollView>
            </View>
        </View>
        );
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
        width: dimensionsObj.textColorPickerBoxWidth,
        alignItems: 'center',
        justifyContent:'center'
    },
    baseColor: {
        flex:3,
        alignItems:'center',
        justifyContent:'center',       
    },
    spanColor:{
        flex:3,
        alignItems:'center',
        justifyContent:'center',
    },
    color : {
        height:dimensionsObj.colorHeight,
        width: dimensionsObj.colorHeight,
        borderRadius:dimensionsObj.colorHeight/2
    }
})


mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps,
{
    renderTextColorDesign,
    changeColor
})(TextDesignBar);