import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStackNavigator,createAppContainer  } from 'react-navigation';
import DesignContainer from './designContainer';
import IntroContainer from './IntroContainer';
import Preview from '../smart/preview';
console.disableYellowBox = true;
export class AppContainer extends Component {
    
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
const AppNavigator = createStackNavigator({
    IntroContainer: {
        screen: IntroContainer
    },
    DesignContainer: {
      screen: DesignContainer, 
    },
    Preview: {
        screen: Preview
    }
  });
  
export default createAppContainer(AppNavigator);


