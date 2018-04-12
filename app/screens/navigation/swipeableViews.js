import React, { Component } from 'react';
import {
  View,
  Keyboard,
  TouchableOpacity,
  Dimensions,
  Image,
  Text
} from 'react-native';
import {
  RkText,
  RkTextInput,
  RkStyleSheet,
  RkButton,
  RkAvoidKeyboard
} from 'react-native-ui-kitten';
import {GradientButton} from '../../components/';
import {scale} from '../../utils/scale';
import SwipeableViews from 'react-swipeable-views-native';
// There is another version using the scroll component instead of animated.
// I'm unsure which one give the best UX. Please give us some feedback.
// import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';

export class LoanRequest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      lendBorrow: ''
    };
  }

  render() {
    return (
      <SwipeableViews index={this.state.index} style={styles.screen}>
        <View style={[styles.slide]}>
          <View style={[styles.greenButton, styles.parentContainer]} onPress={() => {
              this.setState({ index: 1 });
          }}>
              <RkText style={styles.text} rkType='header2'>Lend</RkText>
          </View>
          <View style={[styles.blueButton, styles.parentContainer]} onPress={() => {
              this.setState({ index: 1 });
          }}>
              <RkText style={styles.text} rkType='header2'>Borrow</RkText>
          </View>
        </View>
        <View style={[styles.slide]} rkType='header1'>
          <RkText style={styles.darkText}>Find Friend</RkText>
        </View>
        <View style={[styles.slide, styles.parentContainer]}>
          {console.log(this.state.lendBorrow)}
          <RkText style={styles.darkText}>Amount</RkText>
          <View style={styles.span}>
              <RkText style={[styles.darkText]}>$</RkText>
              <RkTextInput keyboardType='numeric'/>
          </View>
        </View>
        <View style={[styles.slide]}>
          <RkText style={styles.darkText} rkType='header1'>Interest Rate?</RkText>
          <RkTextInput keyboardType='numeric'/>
          <RkText style={styles.darkText} rkType='header3'>Swipe to skip</RkText>
        </View>
      </SwipeableViews>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screen.base
  },
  content: {
    marginTop: 10
  },
  formContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1
  },
  textRow: {
    marginLeft: 20
  },
  expireDateBlock: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  expireDateInput: {
    flex: 0.48,
    marginVertical: 10,
  },
  expireDateInnerInput: {
    textAlign: 'center'
  },
  expireDateDelimiter: {
    flex: 0.04
  },
  balloon: {
    maxWidth: scale(250),
    padding: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: theme.colors.border.solid,
  }, slideContainer: {
    flex: 1
  }, parentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, slide: {
    flex: 1
  },
  greenButton: {
    backgroundColor: '#5caf49',
  },
  blueButton: {
    backgroundColor: '#4ea3d8',
  },
  text: {
    color: '#fff',
  },
  darkText: {
      color: '#606060'
  },
  span: {
      flex: 1,
      flexDirection: 'row'
  }
}));
