import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';

import DesignBox from './components/designBox';
import ImageContainer from './components/imageContainer'; 
import BottomBar from './components/bottomBar';


export default class App extends Component {
render() {
    return (
    <View style={styles.container}>
        <ImageContainer/>
        <BottomBar/>
        <DesignBox/> 
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
