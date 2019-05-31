import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Slider} from 'react-native';
import { connect } from 'react-redux';
import dimensionsObj from '../dimensions';

//icon
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
//@actions
import {openSliderHeight} from '../src/actions/designBoxActions';
import {changeFontSize} from '../src/actions/quoteDesignActions';
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
            onValueChange = {(value) => {
              this.props.changeFontSize(value);
              console.log("Font size is ",this.props.quoteDesignReducer.textFontSize);
            }}
            minimumTrackTintColor="red"
            maximumTrackTintColor="green"
            minimumValue={10}
            maximumValue={70}
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
    backgroundColor: 'rgba(0,0,0,.7)',
    borderRadius: 10,
    zIndex:1,
    position:'absolute' 
  },
});

mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps,{changeFontSize,openSliderHeight})(TextHeightBar);
