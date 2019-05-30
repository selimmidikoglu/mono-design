import React, { Component } from 'react';
import {View,Text,Image,StyleSheet, Animated, ScrollView, TouchableOpacity} from 'react-native';
//icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome  from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
//dimensions
import dimensionsObj from '../dimensions';
//static components(almost)
import TextHeightBar from './textHeightBar';
//redux
import { connect } from 'react-redux';
//actions
import {changeFontFamily, changeColor,changeTextAlign,changeFontWidth,changeFontHeight} from '../src/actions/quoteDesignActions';
import {openSliderWidth,openSliderHeight,changeTextAlignIcon, changeStyleIcon} from '../src/actions/designBoxActions';
import {renderBottomBar} from '../src/actions/renderOrNotActions';
class DesignBox extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        console.log("Aheyr",this.props);
    }
    
    render(){
        if(!this.props.renderOrNotReducer.renderTextDesignBar)
            return null;
        else{
            if(this.props.designBoxReducer.sliderHeightOpened)
                return <TextHeightBar/>;
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
                                pagingEnabled={true}
                                style={{color:'white',marginTop: 10}}
                                horizontal={true}
                                >
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('SanFransisco-Regular')}>
                                    <Text key={1} style={{textAlign:'center',fontFamily:'SanFransisco-Bold',color:'white'}}>San Fransisco</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('OpenSans-Regular')}>
                                    <Text style={{textAlign:'center',fontFamily:'OpenSans-Regular',color:'white'}}>Open Sans</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('Walkway_Black')}>
                                    <Text style={{fontSize: 16,textAlign:'center',fontFamily:'Billabong',color:'white'}}>Billabong</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('Montserrat-Regular')}>
                                    <Text style={{fontSize: 16,textAlign:'left',fontFamily:'Montserrat-Regular',color:'white'}}>Montserrat</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('sabon-next-lt-pro-extra-bold')}>
                                    <Text style={{textAlign:'center',fontFamily:'Yessica-Thin',color:'white'}}>Yessica-Thin</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('Billabong')}>
                                    <Text style={{textAlign:'center',fontFamily:'SFProDisplay-Light',color:'white'}}>SanFransisco</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems:'center',justifyContent:'center',width:100,height:40}}>
                                    <TouchableOpacity onPress= {()=> this.props.changeFontFamily('Yessica')}>
                                    <Text style={{textAlign:'center',fontFamily:'Yessica-Regular',color:'white'}}>Yessica</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        
                        </View>
                        <View style={styles.fontStyleBar}>
                            <View style={{marginTop:10, width:dimensionsObj.designBoxWidth*3/9,flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                                <TouchableOpacity onPress={()=>this.props.changeStyleIcon(0)}><IconAwesome name="bold" size={19} color={this.props.designBoxReducer.fontStyleLogo[0]}/></TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.props.changeStyleIcon(1)}><IconAwesome name="italic" size={19} color={this.props.designBoxReducer.fontStyleLogo[1]}/></TouchableOpacity>
                                <TouchableOpacity onPress={()=>this.props.changeStyleIcon(2)}><IconAwesome name="underline" size={19} color={this.props.designBoxReducer.fontStyleLogo[2]}/></TouchableOpacity>
                            </View>
                            <View style={{marginTop:10,borderLeftColor:'gray', borderLeftWidth:0.6,width:dimensionsObj.designBoxWidth*3/9,flexDirection:'row',justifyContent:'space-around', alignItems:'center'}}>
                                <TouchableOpacity  onPress={()=>{
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
                                <TouchableOpacity><IconMat name="format-letter-case" size={30} color="white"/></TouchableOpacity>
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
        backgroundColor: 'black', 
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
      renderBottomBar
    })(DesignBox);