import React, { Component } from 'react';
import {View,Text,Image,StyleSheet, Animated, ScrollView, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
//icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome  from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
//dimensions
import dimensionsObj from '../../dimensions';
//static components(almost)
import TextHeightBar from './textHeightBar';
import TextWidthBar from './textWidthBar';
//redux
import { connect } from 'react-redux';
//actions
import {changeLetterCase,changeTextStyle,changeTextAccessibility,changeTextUnderline,changeFontFamily, changeColor,changeTextAlign,changeFontWidth,changeFontHeight} from '../../src/actions/quoteDesignActions';
import {openSliderWidth,openSliderHeight,changeTextAlignIcon, changeStyleIcon} from '../../src/actions/designBoxActions';
import {renderBottomBar} from '../../src/actions/renderOrNotActions';
import {changeRotateDegree} from '../../src/actions/rotateAction';
import {changeCase} from '../../src/actions/changeTextActions';
//fonts
let num_deg = 0
import fontsArray from '../../constants/fonts';
class DesignTextBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
        this.timer = null;
    }
    componentDidMount(){
        console.log("Aheyr",this.props);
    }
    rotateClockWise(){
        //let num_deg = parseInt(this.props.rotateReducer.degree.substring(0,this.props.rotateReducer.degree.length-3));
       console.log("num_deg" , num_deg);
       num_deg = num_deg + 5;
       var str = num_deg.toString() + "deg";
       this.props.changeRotateDegree(str);
       this.timer = setTimeout(this.rotateClockWise, 500);
    }
    stopTimer() {
        clearTimeout(this.timer);
    }
    render(){
        if(!this.props.renderOrNotReducer.renderTextDesignBar)
            return null;
        else{
            if(this.props.designBoxReducer.sliderHeightOpened && !this.props.designBoxReducer.sliderWidthOpened)
                return <TextHeightBar/>;
            else if(this.props.designBoxReducer.sliderWidthOpened && !this.props.designBoxReducer.sliderHeightOpened)
                return <TextWidthBar/>
            else
                return(
                    <View style={[styles.container]}>
                        <View style={styles.closeBar}>
                            <TouchableOpacity style= {{alignItems: 'center', justifyContent: 'center',width:'100%', borderBottomColor:'gray', borderBottomWidth: 0.6,height: 30,}} 
                                onPress={() => this.props.renderBottomBar() }>
                                <IconEntypo style= {{marginTop:5}} name="chevron-thin-down" size={19} color="white"/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.fontsBar}>
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                            
                                //pagingEnabled={true}
                                style={{color:'white',marginTop: 10}}
                                horizontal={true}
                                >
                                    {fontsArray.map((font,index) => (
                                        <View key= {font.name} style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                            <TouchableOpacity 
                                                onPress= {()=> {
                                                    this.props.changeFontFamily(index);
                                                    this.props.changeTextAccessibility(index);
                                                }}>
                                                <Text style={{textAlign:'center',fontFamily:font.style.regular,color:'white'}}>{font.name}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    ))}
                            </ScrollView>
                        
                        </View>
                        <View style={styles.fontStyleBar}>
                            <View style={{marginTop:10, width:dimensionsObj.designBoxWidth*3/9,flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                                <TouchableOpacity disabled={this.props.quoteDesignReducer.textStyle[0]}
                                    onPress={()=> {
                                        this.props.changeStyleIcon(0);
                                        this.props.changeTextStyle("bold")
                                        
                                    }}>
                                        <IconAwesome name="bold" size={19} color={this.props.designBoxReducer.boldColor}/>
                                </TouchableOpacity>
                                <TouchableOpacity disabled={this.props.quoteDesignReducer.textStyle[1]}
                                    onPress={()=>{
                                        this.props.changeStyleIcon(1);
                                        this.props.changeTextStyle("italic")
                                    }}>
                                        <IconAwesome name="italic" size={19} color={this.props.designBoxReducer.italicColor}/>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    onPress={()=>{
                                        this.props.changeStyleIcon(2);
                                        this.props.changeTextUnderline();
                                    }}>
                                        <IconAwesome name="underline" size={19} color={this.props.designBoxReducer.underlineColor}/>
                                    </TouchableOpacity>
                            </View>
                            <View style={{marginTop:10,borderLeftColor:'gray', borderLeftWidth:0.6,width:dimensionsObj.designBoxWidth*3/9,flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>{
                                    this.props.changeTextAlignIcon(0);
                                    this.props.changeTextAlign("left");
                                }}><IconMaterial name="format-align-left" size={22} color={this.props.designBoxReducer.textAlignLogo[0]}/></TouchableOpacity>
                                <TouchableOpacity  onPress={()=>{
                                    this.props.changeTextAlignIcon(1);
                                    this.props.changeTextAlign("center");
                                }}><IconMaterial name="format-align-center" size={22} color={this.props.designBoxReducer.textAlignLogo[1]}/></TouchableOpacity>
                                <TouchableOpacity  onPress={()=>{
                                    this.props.changeTextAlignIcon(2);
                                    this.props.changeTextAlign("right");
                                }}><IconMaterial name="format-align-right" size={22} color={this.props.designBoxReducer.textAlignLogo[2]}/></TouchableOpacity>
                            </View> 
                            <View style={{marginTop:10,borderLeftColor:'gray', borderLeftWidth:0.6,width:dimensionsObj.designBoxWidth*3/9,flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                                <TouchableOpacity onPress={() => {
                                    this.props.openSliderHeight();
                                    console.log(this.props.designBoxReducer)
                                    }}><IconFontAwesome name="text-height" size={22} color="white"/></TouchableOpacity>
                                <TouchableOpacity onPress={() => {
                                    this.props.openSliderWidth();
                                    console.log(this.props.designBoxReducer)
                                    }}><IconFontAwesome name="text-width" size={22} color="white"/></TouchableOpacity>
                                {/*<TouchableNativeFeedback 
                                    onPressIn={() => this.rotateClockWise()}
                                    onPressOut={() => this.stopTimer()}
                                ><IconMat name="format-letter-case" size={30} color="white"/></TouchableNativeFeedback>*/}
                                <TouchableOpacity 
                                    onPress={() => {
                                        this.props.changeLetterCase();
                                        this.props.changeCase() ;
                                    }}
                                ><IconMat name="format-letter-case" size={30} color={this.props.quoteDesignReducer.letterCaseButtonColor}/></TouchableOpacity>

                            </View>                 
                        </View>
                    </View>
                )
        }
        
        
    }
}

const styles = StyleSheet.create({  
    container: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: dimensionsObj.designBoxHeight, 
        width: dimensionsObj.designBoxWidth,
        backgroundColor: 'rgba(0,0,0,.7)',
        borderRadius: 10,
        zIndex:1,
        position:'absolute' 
    },
    fontsBar: {
        flex:3,
        width: dimensionsObj.designBoxWidth,
    },
    fontStyleBar: {
        flex:3,
        width: dimensionsObj.designBoxWidth,
        flexDirection: 'row',
    },
    closeBar: {
        flex:1,
        width: dimensionsObj.designBoxWidth,
        alignItems: 'center',
        justifyContent:'center'
    }
});

mapStateToProps = (state) => {
    return state
  }
  export default connect(mapStateToProps,
    {
      openSliderWidth,
      openSliderHeight,
      changeTextAlignIcon,
      changeStyleIcon,
      changeColor,
      changeFontFamily,
      changeTextAlign,
      changeFontWidth,
      changeFontHeight,
      renderBottomBar,
      changeRotateDegree,
      changeTextUnderline,
      changeTextAccessibility,
      changeTextStyle,
      changeLetterCase,
      changeCase
    })(DesignTextBox);