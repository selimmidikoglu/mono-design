import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import dimensionsObj from '../../dimensions';
import { StackActions, NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

_storeData = async () => {
  try {
    await AsyncStorage.setItem('haydar', 'false');
  } catch (error) {
    // Error saving data
  }
};
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('haydar');
    if (value !== null) {
      let jsonParsed = JSON.parse(value)
      console.log(jsonParsed)
      return jsonParsed
    }
    else {
      let jsonParsed = JSON.parse(value)
      //console.log(jsonParsed)
      return jsonParsed
    }
  } catch (error) {
    return false;
  }
};

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'DesignContainer' })],
});

const slides = [
  {
    key: 'somethun',
    title: 'Search Images',
    text: 'Search and get best images taken by professional photographers, choose your image by sliding left or right',
    image: require('../../assets/images/introImages/shareImagesmdpi.png'),
    backgroundColor: '#29434e',
    imageStyle: { marginBottom: 50, width: 250, height: 250, resizeMode: "contain" },
    textStyle: { marginBottom: 100, fontFamily: 'AlegreyaSans-Medium', color: 'white', fontSize: 16, },
    titleStyle: { fontFamily: 'AlegreyaSans-Medium', color: 'white', fontSize: 25, },
  },
  {
    key: 'somethun-dos',
    title: 'Edit and Personalise The Text',
    text: 'Change text styles, color, add background box, add some shadow, change colors and more',
    image: require('../../assets/images/introImages/deneme2.png'),
    backgroundColor: '#29434e',
    imageStyle: { marginBottom: 50, width: 250, height: 250, resizeMode: "contain" },
    textStyle: { marginBottom: 100, fontFamily: 'AlegreyaSans-Medium', color: 'white', fontSize: 16, },
    titleStyle: { fontFamily: 'AlegreyaSans-Medium', color: 'white', fontSize: 25, },
  },
  {
    key: 'somethun1',
    title: 'Share Image',
    text: 'Share your design in various platforms',
    image: require('../../assets/images/introImages/shareSocialmdpi.png'),
    backgroundColor: '#29434e',
    imageStyle: { marginBottom: 50, width: 250, height: 250, resizeMode: "contain" },
    textStyle: { marginBottom: 100, fontFamily: 'AlegreyaSans-Medium', color: 'white', fontSize: 16, },
    titleStyle: { fontFamily: 'AlegreyaSans-Medium', color: 'white', fontSize: 25, },

  }
];

export class IntroContainer extends Component {
  static navigationOptions = {
    header: null,
  }
  componentDidMount() {
    let value = _retrieveData()
    if(value === null)
      _storeData()
    else
      this.props.navigation.dispatch(resetAction);


  }
  _onDone = () => {
    let value = _retrieveData()
    if(null)
      _storeData()
    else
      this.props.navigation.dispatch(resetAction);

  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#29434e" />
        <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    width: dimensionsObj.width,
    height: dimensionsObj.height,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default IntroContainer
