import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground,ScrollView, TextInput, Alert, TouchableOpacity, Image, Text } from 'react-native';
import Gestures from 'react-native-easy-gestures';
//get image url array => getimages
//import getImages from '../api/unsplashGetImage';
//React-navigation
import { withNavigation } from 'react-navigation';
//dimensions
import dimensionsObj from '../../dimensions';
//redux connect
import { connect } from 'react-redux';
//capture
import {captureScreen, captureRef } from "react-native-view-shot";
//actions
import {renderImageContainerBeforePreview,renderPreviewScreen, renderBottomBar} from '../../src/actions/renderOrNotActions';
import {changeText} from '../../src/actions/changeTextActions';
import {addNewListOfImages} from '../../src/actions/imageAction';
import {changePrevUri} from '../../src/actions/prevActions';
import {changeRotateDegree,getRotateDegree} from '../../src/actions/rotateAction';

//dumb components
import Indicator from '../dumb/indicator';
//smart components
import Preview from '../smart/preview';

import ViewShot from 'react-native-view-shot';
//globals for the component
//highlight
import Highlighter from 'react-native-highlight-words';

class ImageContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            verticalIsTrue: false,
            horizontalIsTrue: false,
            images : [],
            scrollable : true,
            loading: true,
            renderAgain: false,
            previousColor: '',
            addedImages:[],
        }
        this.scrollView = null;
    }
    insert(index, string){
        if (index > 0)
          return this.substring(0, index) + string + this.substring(index, this.length);
      
        return string + this;
    };
    handleScroll(event) {
        console.log(event.nativeEvent.contentOffset.x/dimensionsObj.width);
        //0.9999999788072373
    };
    componentDidMount(){
 
       this.fetchImages(); 
       /*this.refs.scrollView.scrollTo({ x: 3 * dimensionsObj.width , y: 0, animated: true })  
       setTimeout(() => {
        this.scrollView.scrollTo({ x: 4 *  dimensionsObj.width , y: 0 , animated: false });
    }, 700);*/
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.imageReducer.key !== prevProps.imageReducer.key)
            this.fetchImages()
        if(this.props.renderOrNotReducer.renderImageContainerBeforePreview  !== prevProps.renderOrNotReducer.renderImageContainerBeforePreview){                
                this.refs.viewShot.capture().then(uri => {
                    this.props.changePrevUri(uri);
                    console.log("Prop ",this.props.renderOrNotReducer.renderImageContainerBeforePreview);
                    console.log("prevProp ",prevProps.renderOrNotReducer.renderImageContainerBeforePreview);
                    
                    this.props.navigation.navigate('Preview');
                  
                })
            .catch(err => console.log(err));
                
                
               /*
                captureScreen({
                    format: "jpg",
                    quality: 0.9
                  })
                  .then(
                    uri => {
                        this.props.changePrevUri(uri);
                        
                        this.props.navigation.navigate('Preview');
                        this.props.renderImageContainerBeforePreview();
                        //this.props.renderPreviewScreen();
                        
                    },
                ).catch(error => console.error("Oops, snapshot failed", error) );
                */
        }
    }

    fetchImages(){
        this.setState({loading:true})
        fetch('https://api.unsplash.com/search/photos?query='+this.props.imageReducer.key + '&per_page=20&page=1&client_id=bf5952f2a5d2f9b0c49ed75d8192934666d91570f09e21db0889f8d12c248944', {
            method: 'GET',
            headers: {
                "cache-control": "no-cache",
                "Connection": "keep-alive",
                "accept-encoding": "gzip, deflate",
                "cookie": "ugid=eb28c3dc28ee20b11b41d011a0b29d445197157",
                "Host": "api.unsplash.com",
                "Postman-Token": "5b916fef-99fe-4112-862e-42b06ea26ec7,682d3a3d-e6ab-45a9-9a49-c6ec5e9e9e78",
                "Cache-Control": "no-cache",
                "User-Agent": "PostmanRuntime/7.13.0"
            }
        })
        .then(response => response.json())
        .then((responseJson) => {
            console.log("RESPONSE");
            console.log(responseJson);
            var imageUrls = [];
            if(responseJson.total !== 0){
                for (let i = 0; i < responseJson.results.length; i++) {
                    let element = responseJson.results[i].urls.regular;
                    let index = element.indexOf('ixid');
                    let insertStr = "w=" + dimensionsObj.width + "&h=" + dimensionsObj.height + "&";
                    let str = element.substring(0,index) + insertStr + element.substring(index,element.length);
                    
                    imageUrls.push(element);
                        
                }
                this.props.addNewListOfImages(imageUrls); 
            }
            else{
                Alert.alert(
                    'Not found!',
                    'We could not find any photos related to your search! Search more relevant keywords.',
                    [
                      
                      {
                        text: 'OK',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                     
                    ],
                    {cancelable: false},
                  );
            }            
            this.setState({loading:false})

        })
        .catch((error) => {
            console.log(error);
        });
    }
   
    render() {
        //console.log(this.props.quoteDesignReducer.textFontFamily)
        let colorBackground = this.props.changeTextBackgroundReducer.color!==''?(this.props.changeTextBackgroundReducer.color + this.props.changeTextBackgroundReducer.opacity.toString() + ')'):'rgba(0,0,0,0)';
        let colorShadow = this.props.changeTextShadowReducer.textShadowColor!==''?(this.props.changeTextShadowReducer.textShadowColor + this.props.changeTextShadowReducer.textShadowOpacity.toString() + ')'):'rgba(0,0,0,0)';
            if(this.state.loading)
                return (
                    <Indicator type = "wave" color="#29434e" size={40}/>
                )
            else
               
                    return(
                        
                       
                        <View  style={styles.container}>
                            <ViewShot ref="viewShot" options={{ format: "jpg", quality: 1 }}>
                            <View style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                                <ScrollView
                                    ref={scrollView => this.scrollView = scrollView}
                                    onScroll={(event)=>this.handleScroll(event)} 
                                    horizontal={true} 
                                    pagingEnabled ={true}
                                    scrollEnabled={this.state.scrollable}>
                                        
                                    {this.props.imageReducer.addedImages.length > 0?
                                        (this.props.imageReducer.addedImages.map((image,index) =>(
                                            
                                            <View  key={index} style={{justifyContent:'center',alignItems:'center',height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                                                <Image resizeMode="cover" source ={{uri:image.path}} style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}/>      
                                            </View>
                                        ))):null 
                                    }
                                    {this.props.imageReducer.images.map((image,index) =>(
                                        <View  key={index} style={{justifyContent:'center',alignItems:'center',height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                                            <Image resizeMode="cover" source ={{uri:image}} style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}/>      
                                        </View>
                                    ))
                                    }
                                    
                                </ScrollView>
                                
                            </View>
                                
                                <Gestures 
                                    
                                    rotatable={true}
                                    scalable={true}
                                    
                                    onRotateStart ={(event,styles)=> {
                                        this.setState({scrollable:false});
                                    }}
                                    onRotateChange ={(event,styles)=> {
                                        this.setState({scrollable:false});
                                        
                                        //this.props.getRotateDegree(styles.transform[1].rotate);
                                    }}
                                    onRotateEnd ={(event,style) => {

                                        this.setState({scrollable:true})
                                    }}
                                    onChange={(event, styles) => {
                                       //this.setState({scrollable:false})
                                        /*
                                        var styleRotate = styles.transform[0].rotate;
                                        var rotateInt= parseFloat(styleRotate.substring(0,styleRotate.length-3));
                                        var horizontalTop = styles.top;

                                        if(rotateInt<0.5 && rotateInt > -0.5){
                                            //console.log(rotateInt);
                                            this.setState({verticalIsTrue:true})
                                        }
                                        else
                                            this.setState({verticalIsTrue:false})*/
                                    }}
                                   
                                    onEnd={(event, styles) => {
                                        this.setState({verticalIsTrue:false})
                                    }}
                                    style={{zIndex:1,position:'absolute',//transform:[{rotate: this.props.rotateReducer.gestureDegree}]
                                   }}
                                    
                                    >
                                    
                                   
                                   <TextInput
                                        textDecorationLine={this.props.quoteDesignReducer.underline?"underline":"none"}
                                        //autoFocus={true}
                                        //disableFullscreenUI={false}
                                        autoCapitalize={this.props.quoteDesignReducer.letterCase}
                                        selectable = {true}
                                        //selection = {{start:0,end:0}}
                                        //onKeyPress={()=>this.props.renderBottomBar()}
                                        autoCompleteType="off"
                                        selectionColor='gray'
                                        underlineColorAndroid='rgba(0,0,0,0)'
                                        //underlineColorAndroid={this.props.quoteDesignReducer.textColor}
                                        autoCorrect={false}
                                        multiline
                                        returnKeyType="done"
                                        onChangeText ={(text)=>this.props.changeText(text)} 
                                        style={{
                                            backgroundColor: colorBackground,//this.props.changeTextBackgroundReducer.color + this.props.changeTextBackgroundReducer.opacity.toString() + ')',
                                            borderRadius: this.props.changeTextBackgroundReducer.borderRadius,
                                            fontWeight: 'normal',
                                            textAlign:'center',
                                            color:this.props.quoteDesignReducer.textColor,  
                                            alignSelf:'center',
                                            textAlign:this.props.quoteDesignReducer.textAlign,
                                            fontFamily: this.props.quoteDesignReducer.textFontFamily,
                                            width:this.props.quoteDesignReducer.textWidth,
                                            fontSize:this.props.quoteDesignReducer.textFontSize,
                                            textShadowOffset: { 
                                                width: this.props.changeTextShadowReducer.textShadowOffset.width, 
                                                height: this.props.changeTextShadowReducer.textShadowOffset.height
                                            },
                                            textShadowRadius: this.props.changeTextShadowReducer.textShadowRadius,
                                            textShadowColor: colorShadow,
                                            
                                            //transform: [{ rotate: this.props.rotateReducer.gestureDegree}]
                                        }}>
                                            {this.props.changeTextReducer.text} 
                                    </TextInput>
                                    
                                    
                                </Gestures>
                                </ViewShot>
                            {this.state.verticalIsTrue? (<View
                                style={{
                                alignSelf:'center',
                                zIndex:2,
                                position:'absolute',
                                height: dimensionsObj.height,
                                borderLeftWidth: 2,
                                borderColor: 'white',
                                borderStyle:'dashed',
                                borderRadius:5,
                                }}
                            />):null}
                        </View>
                    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:dimensionsObj.imageBoxHeight,
        width:dimensionsObj.imageBoxWidth,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#29434e'
        
    }
    

})

mapStateToProps = (state) => {
    return state
}

export default connect(
    mapStateToProps,
    {
        changeText,
        addNewListOfImages,
        changePrevUri,
        renderImageContainerBeforePreview,
        renderPreviewScreen,
        renderBottomBar,
        changeRotateDegree,
        getRotateDegree
    })(withNavigation(ImageContainer));
