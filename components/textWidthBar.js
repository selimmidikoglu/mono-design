import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Slider} from 'react-native';
import { connect } from 'react-redux';
import dimensionsObj from '../dimensions';

//icon
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
//@actions
import {openSliderWidth} from '../src/actions/designBoxActions';
import {changeTextWidth} from '../src/actions/quoteDesignActions';
class TextWidthBar extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection:'row-reverse',
            alignItems:'flex-start',
            justifyContent:'flex-start'
          }}
        >
          <View style={{marginLeft:0,marginTop:5}}>
            <TouchableOpacity onPress={() => {
              this.props.openSliderWidth();
              console.log(this.props.designBoxReducer)
            }}>
            <IconSimple
              style={{marginLeft:0,marginRight:0}}
              name="close"
              size={dimensionsObj.designBoxHeight * 1 / 5}
              color="white"
            />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 3, alignItems: 'center'}}>
          <Slider
            onValueChange={(value) => this.props.changeTextWidth(value)}
            minimumTrackTintColor="red"
            maximumTrackTintColor="green"
            minimumValue={200}
            maximumValue={dimensionsObj.width}
            style={{height: 50,width: dimensionsObj.designBoxWidth-20}}
          />
        </View>
        <View style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    height: dimensionsObj.designBoxHeight,
    width: dimensionsObj.designBoxWidth,
    backgroundColor: 'rgba(0,0,0,.8)',
    borderRadius: 10,
    zIndex:1,
    position:'absolute',
    marginBottom:10
  },
});

mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps,{changeTextWidth,openSliderWidth})(TextWidthBar);
