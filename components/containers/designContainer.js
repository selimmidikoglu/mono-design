import React, {Component} from 'react';
import {StyleSheet,View,Keyboard} from 'react-native';

import DesignTextBox from '../smart/designTextBox';
import ImageContainer from '../smart/imageContainer'; 
import BottomBar from '../smart/bottomBar';
import SearchBoxWithModal from '../smart/searchBoxWithModal';
import TextDesignBar from '../smart/textColor';
import BackgroundWindow from '../smart/backgroundWindow';
import TextShadowDesign from '../smart/textShadowDesign';
//keyboard thing
import KeyboardListener from 'react-native-keyboard-listener';
//SCREENSHOT
import ViewShot from "react-native-view-shot";

export default class DesignContainer extends Component {
    static navigationOptions= {
        header: null,
    }
    constructor(props){
        super(props);
        this.state = {
            bottomVisible: true,

        }
    }

render() {
    return (

            <View style={styles.container}>
                  <View>
                        <KeyboardListener
                            onWillShow={() => { this.setState({ bottomVisible: false }); }}
                            onWillHide={() => { this.setState({ bottomVisible: true }); }}
                        />
                </View>
                <ImageContainer/>
                {this.state.bottomVisible?<BottomBar/>:null}
                {this.state.bottomVisible?<DesignTextBox/>:null}
                {this.state.bottomVisible?<TextDesignBar/>:null}
                {this.state.bottomVisible?<SearchBoxWithModal/>:null}
                {this.state.bottomVisible?<BackgroundWindow/>:null}
                {this.state.bottomVisible?<TextShadowDesign/>:null}
            </View>
        
        );
      }
    }
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',

    },
});