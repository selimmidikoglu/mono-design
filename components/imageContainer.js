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
            images : []
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
            "Accept": "*/*",
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
        console.log("imagecontainer",this.props.quoteDesignReducer);
        return(
            <View style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                <View style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                    <ScrollView horizontal={true} pagingEnabled>
                        {this.state.images.map((image) =>(
                            <View  key={image} style={{backgroundColor:'black',justifyContent:'center',alignItems:'center',height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}>
                                <Image resizeMode="cover" source ={{uri:image}} style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.imageBoxWidth}}/>      
                            </View>
                        )) 
                        }
                    </ScrollView>
                </View>
                <View style={{height:dimensionsObj.imageBoxHeight,width:dimensionsObj.width,alignItems:'center',justifyContent:'center',zIndex:1,position:'absolute'}}>
                    <Gestures 
                        rotatable={true}
                        scalable={false}
                        onChange={(event, styles) => {
                            console.log(styles);
                        }}style={{marginBottom:10}}>
                        <TextInput
                            underlineColorAndroid='rgba(0,0,0,0)'
                            autoCorrect={false}
                            multiline
                            returnKeyType="done"
                            onChangeText ={(text)=>this.props.changeText(text)} 
                            style={{
                                color:'white',  
                                alignSelf:'center',
                                textAlign:this.props.quoteDesignReducer.textAlign,
                                fontFamily: this.props.quoteDesignReducer.textFontFamily,
                                width:300,
                                borderColor:'red',
                                borderWidth: 2
                            }}>
                                {this.props.changeTextReducer.text} 
                        </TextInput>
                    </Gestures>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:dimensionsObj.imageBoxHeight,
        width:dimensionsObj.imageBoxWidth,
        
    }
    

})

mapStateToProps = (state) => {
    return state
}
export default connect(
    mapStateToProps,
    {
        changeText
    })(ImageContainer);
