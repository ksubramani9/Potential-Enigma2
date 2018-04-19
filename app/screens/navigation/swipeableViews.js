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
import stylesheet from "../../assets/Stylesheet";
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
        <View style={[styles.slide]} rkType='header1'>
          <RkText style={styles.darkText} rkType='large'>FIND FRIEND</RkText>
        </View>

        <View style={[styles.slide]}>
        <View style={[styles.roseButton, styles.parentContainer]} onPress={() => {
            this.setState({ index: 1 });
        }}>
            <GradientButton rkType='large' style={stylesheet.login.save} text='JUST SEND ' />
        </View>
          <View style={[styles.lavenderButton, styles.parentContainer]} onPress={() => {
              this.setState({ index: 1 });
          }}>
              <GradientButton rkType='large' style={stylesheet.login.save} text= 'LEND' />
          </View>
          <View style={[styles.roseButton, styles.parentContainer]} onPress={() => {
              this.setState({ index: 1 });
          }}>
              <GradientButton rkType='large' style={stylesheet.login.save} text='BORROW ' />
          </View>
        </View>

        <View style={[styles.slide, styles.parentContainer]}>
          {console.log(this.state.lendBorrow)}
          <RkText style={styles.darkText} rkType='large'>AMOUNT</RkText>
          <View style={styles.span}>
              <RkText style={[styles.darkText]}>$</RkText>
              <RkTextInput keyboardType='numeric'/>
          </View>
        </View>
        <View style={[styles.slide]}>
          <RkText style={styles.darkText} rkType='header1'>Interest Rate?</RkText>
          <RkTextInput keyboardType='numeric' placeholder='2% /yr'/>

          <RkText style={styles.darkText} rkType='header6' fontStyle='italic'>Swipe to skip</RkText>
        </View>

        <View style={[styles.slide]}>
          <RkText style={styles.darkText} rkType='header1'>Autoschedule?</RkText>
          <RkTextInput keyboardType='text'/>
          <RkText style={styles.darkText} rkType='header4'>Send Reminder Emails</RkText>
        </View>
        <View style={[styles.slide]}>



          <GradientButton rkType='large' style={stylesheet.login.save} text='DONE ' />
          <RkText style={styles.lighterText} rkType='header4'>Take me to more a advanced loan</RkText>

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
  lavenderButton: {
    backgroundColor: '#fbaed2',
  },
  roseButton: {
    backgroundColor: '#ffe4e1',
  },
  // roseButton: {
  //   backgroundColor: '#FF69B4',
  // },
  text: {
    color: '#fff',
  },
  darkText: {
      color: '#000000'
  },
  lighterText: {
      color: '#A0A0A0'
  },
  span: {
      flex: 1,
      flexDirection: 'row'
  }
}));
