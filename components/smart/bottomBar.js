import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, PermissionAndroid } from 'react-native';
//icons
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome  from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';
import Share, {ShareSheet, Button} from 'react-native-share';
//dimensions
import dimensionsObj from '../../dimensions';
//redux
import { connect } from 'react-redux';
//actions
import {addImagesFromDevice,addNewListOfImages} from '../../src/actions/imageAction';
import {renderTextShadowDesign,renderImageContainerBeforePreview, renderTextColorDesign,renderBottomBar,renderSearchBox,renderTextDesignBar,renderPreviewScreen,
    renderBackgroundWindow} from '../../src/actions/renderOrNotActions';
import { changePrevUri} from '../../src/actions/prevActions';
import {changeRotateDegree} from '../../src/actions/rotateAction';

//Multiple-Image-Picker
import ImagePicker from 'react-native-image-crop-picker';

class BottomBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            height:dimensionsObj.designBoxHeight
        }
    }
    onCancel () {
        console.log ('CANCEL');
        this.setState ({bottomBarVisible: true, visible: false});
    }
    onOpen () {
        console.log ('OPEN');
        this.setState ({bottomBarVisible: false, visible: true});
    }
    render() {
        let shareOptions = {
            title: 'Share Via',
            message: 'Created with MonoDesign',
            url: this.props.prevReducer.uri,
            subject: Share.Social.WHATSAPP, //  for email
            forceDialog:true,
            failOnCancel: true,
          };
      
          let shareImageBase64 = {
            title: 'React Native',
            message: 'Created with MonoDesign',
            url: this.props.prevReducer.uri,
            subject: 'Share Link', //  for email
          };
        if(this.props.renderOrNotReducer.renderBottomBar)
            return(
                <View style={{
                    flexDirection:'column',
                    height:this.state.height,
                    width:dimensionsObj.designBarWidth,
                    backgroundColor: 'rgba(0,0,0,.7)',
                    borderRadius: 10,
                    zIndex:1,
                    position:'absolute'
                }}>
                    <View style={styles.row}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=>this.props.renderTextDesignBar()} >
                                <IconMat name="format-text" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => {
                                this.props.renderTextColorDesign();
                                console.log(this.props);
                                }}>
                                <IconFoundation name="text-color" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=>this.props.renderBackgroundWindow()}>
                                <IconMat name="format-textbox" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=> this.props.renderTextShadowDesign()}>
                                <IconMat name="text-shadow" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                           
                        </View> 
                    </View>
                    <View style={styles.row}>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => {
                                this.props.renderImageContainerBeforePreview()          
                                }}>
                                <IconMat name="eye" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=> {
                                ImagePicker.openPicker({
                                    multiple: true
                                  }).then(images => {
                                    this.props.addImagesFromDevice(images);
                                    console.log(images);
                                    console.log(this.props.imageReducer)
                                  });
                            }}>
                                <IconMat name="image-multiple" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={()=>this.props.renderSearchBox()}>
                                <IconMat name="image-search-outline" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
                            </TouchableOpacity>
                            
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity onPress={() => {
                                this.onCancel ();
                                setTimeout (() => {
                                  Share.open (shareOptions);
                                }, 20);
                              }}
                            >
                                <IconMaterial name="file-download" style={styles.icon} size={dimensionsObj.designBarButtonHeight-10}/>
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
        height:dimensionsObj.designBoxHeight,
        width:dimensionsObj.designBarWidth,
        backgroundColor: 'rgba(0,0,0,.7)',
        borderRadius: 10,
        //zIndex:1,
        //position:'absolute'
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
      renderTextDesignBar,
      renderSearchBox,
      renderPreviewScreen,
      renderBottomBar,
      renderTextColorDesign,
      changePrevUri,
      renderImageContainerBeforePreview,
      renderBackgroundWindow,
      renderTextShadowDesign,
      addImagesFromDevice,
      addNewListOfImages,
      changeRotateDegree
      
    })(BottomBar);