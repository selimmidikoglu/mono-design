import React, {Component} from 'react';
import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
//Design
import dimensionsObj from '../../dimensions';
//Icons
import IconMat from 'react-native-vector-icons/MaterialIcons';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
//Dumb
import Indicator from '../dumb/indicator';

//REDUX
import {connect} from 'react-redux';
import {addNewListOfImages, getImageKey} from '../../src/actions/imageAction';
import {renderSearchBox} from '../../src/actions/renderOrNotActions';
class SearchBoxWithModal extends Component {
  constructor (props) {
    super (props);
    this.state = {
      focus: false,
      searching: false,
      keyword: ''
    };
  }
  componentDidMount () {
    //this.textInputRef.focus()
  }
  render () {
      return (
        <Modal
          hardwareAccelerated
          presentationStyle="overFullScreen"
          animationType="slide"
          transparent={true}
          visible={this.props.renderOrNotReducer.renderSearchBox}
        >

          <TouchableWithoutFeedback onPress={() => this.props.renderSearchBox ()}>
          <View style={{widht:dimensionsObj.width,height:dimensionsObj.height,backgroundColor:'rgba(0,0,0,0.7)'}}>
          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
              }}
            >
              <IconEvil
                name="search"
                size={dimensionsObj.searchBoxHeight - 25}
                color="white"
              />
            </View>
            <View style={{flex: 8}}>
              <TextInput
                ref={ref => this.textInputRef = ref}
                autoFocus={true}
                onChangeText={(text) => {
                  console.log(text);
                  this.setState({keyword:text})
                }}
                onEndEditing={() => this.props.getImageKey (this.state.keyword)}
                onSubmitEditing = {() => {
                  this.props.getImageKey(this.state.key)
                }}
                placeholderTextColor="white"
                selectionColor={'white'}
                style={{
                  fontSize: dimensionsObj.searchBoxHeight - 30,
                  height: dimensionsObj.searchBoxHeight - 5,
                  color: 'white',
                  fontFamily: 'ZCOOLXiaoWei-Regular',
                }}
                placeholder="search"
                autoCorrect={false}
                underlineColorAndroid="rgba(0,0,0,0)"
                returnKeyType="none"
                clearButtonMode="while-editing"
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 20,
              }}
            >
              {!this.state.searching
                ? <TouchableWithoutFeedback
                    onPress={() => {
                        this.props.getImageKey(this.state.keyword)
                        //this.props.renderSearchBox ();
                    }}
                  >
                    <IconMat
                      name="arrow-forward"
                      size={dimensionsObj.searchBoxHeight - 20}
                      color="white"
                    />
                  </TouchableWithoutFeedback>
                : <Indicator
                    type="bar"
                    color="white"
                    size={dimensionsObj.searchBoxHeight - 20}
                  />}
            </View>
            {/*<View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 10,
              }}
            >
              <TouchableWithoutFeedback
                onPress={() => this.props.renderSearchBox ()}
              >
                <IconSimple
                  name="close"
                  size={dimensionsObj.searchBoxHeight - 30}
                  color="white"
                />
              </TouchableWithoutFeedback>

            </View>
            */}

          </View>
          </View>

          </TouchableWithoutFeedback>
        </Modal>
      );
  }
}

const styles = StyleSheet.create ({
  container: {
    alignSelf: 'center',
    height: dimensionsObj.searchBoxHeight,
    width: dimensionsObj.searchBoxWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 30,
  },
});

mapStateToProps = state => {
  return state;
};
export default connect (mapStateToProps, {
  getImageKey,
  addNewListOfImages,
  renderSearchBox,
}) (SearchBoxWithModal);
