import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground,ScrollView, TextInput,KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import Gestures from 'react-native-easy-gestures';
//get image url array => getimages
//import getImages from '../api/unsplashGetImage';
import dimensionsObj from '../dimensions';
//redux connect
import { connect } from 'react-redux';
//actions
//import {changeText} from '../src/actions/changeTextActions';
import {changeText} from '../src/actions/changeTextActions';

//globals for the component


class ImageContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            /*images : [
                "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg",
            "https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252__340.jpg"],*/
            verticalIsTrue: false,
            images : [],
            scrollable : true,
        }
    }
    componentDidMount(){
        fetch('https://api.unsplash.com/search/photos?query=newyork&per_page=20&page=1&client_id=bf5952f2a5d2f9b0c49ed75d8192934666d91570f09e21db0889f8d12c248944', {
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
        var imageUrls = [];
        for (let i = 0; i < responseJson.results.length; i++) {
            const element = responseJson.results[i].urls.regular;
            imageUrls.push(element);
        }
        this.setState({images:imageUrls});
        console.log(this.state.images);
      })
      .catch((error) => {
        console.log("There was a problem with downloading images");
      });
    }
  
   
    render() {
            return (
                    <View style={styles.container}>
                        <View style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                            <ScrollView horizontal={true} pagingEnabled scrollEnabled={this.state.scrollable}>
                                {this.state.images.map((image,index) =>(
                                    <View  key={index} style={{backgroundColor:'black',justifyContent:'center',alignItems:'center',height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                                        <Image resizeMode="cover" source ={{uri:image}} style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}/>      
                                    </View>
                                )) 
                                }
                            </ScrollView>
                        </View>
                        
                            <Gestures 
                                rotatable={true}
                                scalable={false}
                                onRotateStart ={(event,styles)=> {
                                    this.setState({scrollable:false});
                                }}
                                onRotateChange ={(event,styles)=> {
                                    this.setState({scrollable:false});
                                }}
                                onRotateEnd ={(event,style) => {
                                    this.setState({scrollable:true})
                                }}
                                onChange={(event, styles) => {
                                    var styleRotate = styles.transform[0].rotate;
                                    var rotateInt= parseFloat(styleRotate.substring(0,styleRotate.length-3));
                                    if(rotateInt<0.5 && rotateInt > -0.5){
                                        console.log(rotateInt);
                                        this.setState({verticalIsTrue:true})
                                    }
                                    else
                                        this.setState({verticalIsTrue:false})
                                }}
                                onEnd={(event, styles) => {
                                    this.setState({verticalIsTrue:false})
                                }}
                                style={{zIndex:1,position:'absolute',margin:200,marginLeft:100,borderColor:'red',borderWidth: 2,}}
                                >
                                <TextInput
                                    
                                    disableFullscreenUI={true}
                                    autoCompleteType="off"
                                    selectionColor='gray'
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    autoCorrect={false}
                                    multiline
                                    returnKeyType="done"
                                    onChangeText ={(text)=>this.props.changeText(text)} 
                                    style={{
                                        textAlign:'center',
                                        color:'white',  
                                        alignSelf:'center',
                                        textAlign:this.props.quoteDesignReducer.textAlign,
                                        fontFamily: this.props.quoteDesignReducer.textFontFamily,
                                        width:this.props.quoteDesignReducer.textWidth,
                                        fontSize:this.props.quoteDesignReducer.textFontSize
                                    }}>
                                        {this.props.changeTextReducer.text} 
                                </TextInput>
                            </Gestures>

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
        justifyContent:'center'
        
    }
    

})

mapStateToProps = (state) => {
    return state
}
export default connect(
    mapStateToProps,
    {
        changeText,
    })(ImageContainer);
