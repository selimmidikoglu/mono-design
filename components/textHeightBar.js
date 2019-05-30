import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Slider} from 'react-native';
import { connect } from 'react-redux';
import dimensionsObj from '../dimensions';

//icon
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
//@actions
import {openSliderHeight} from '../src/actions/designBoxActions';
class TextHeightBar extends Component {
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
              this.props.openSliderHeight();
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
            minimumTrackTintColor="red"
            maximumTrackTintColor="green"
            minimumValue={10}
            maximumValue={150}
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
    backgroundColor: 'rgba(0,0,0,1)',
  },
});

mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps,{openSliderHeight})(TextHeightBar);
