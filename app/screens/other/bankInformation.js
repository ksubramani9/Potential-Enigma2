import React from 'react';
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
import {PasswordTextInput} from '../../components/passwordTextInput';
import SwipeableViews from 'react-swipeable-views-native';
import {DatePicker} from '../../components/picker/datePicker';
import {CardInput} from '../../components/cardInput';
import {scale} from '../../utils/scale';

export class AddToCardForm extends React.Component {
  static navigationOptions = {
    title: 'PAYSA'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: '',
      nameOnCard: '',
      cardCode: '',
      expireYear: 2017,
      expireMonth: 8,
      pickerVisible: false,
    };
  }

  handlePickedDate(date) {
    console.log(date);
    this.setState({expireMonth: date.month.key, expireYear: date.year});
    this.hidePicker()
  }

  hidePicker() {
    this.setState({pickerVisible: false});
  }

  render() {
    return (
      /*<RkAvoidKeyboard
        style={styles.screen}
        onStartShouldSetResponder={(e) => true}
        onResponderRelease={(e) => Keyboard.dismiss()}>
        <View style={[styles.formContent]}>
          <View>
            <View>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Card Number</RkText>
              </View>
              <CardInput/>
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Expire date</RkText>
              </View>
              <View style={[styles.expireDateBlock]}>
                <DatePicker
                  onConfirm={(date) => this.handlePickedDate(date)}
                  onCancel={() => this.hidePicker()}
                  selectedYear={this.state.expireYear}
                  selectedMonth={this.state.expireMonth}
                  visible={this.state.pickerVisible}
                  customDateParts={[DatePicker.DatePart.YEAR, DatePicker.DatePart.MONTH]}/>
                <View style={[styles.expireDateInput, styles.balloon]}>
                  <TouchableOpacity onPress={() => this.setState({pickerVisible: true})}>
                    <RkText rkType='medium' style={styles.expireDateInnerInput}>
                      {this.state.expireMonth}
                    </RkText>
                  </TouchableOpacity>
                </View>
                <View style={[styles.expireDateDelimiter]}/>
                <View style={[styles.expireDateInput, styles.balloon]}>
                  <TouchableOpacity onPress={() => this.setState({pickerVisible: true})}>
                    <RkText rkType='medium' style={styles.expireDateInnerInput}>
                      {this.state.expireYear}
                    </RkText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Name On Card</RkText>
              </View>
              <RkTextInput rkType='rounded'
                           onChangeText={(nameOnCard) => this.setState({nameOnCard})}
                           value={this.state.nameOnCard}/>
            </View>

            <View style={[styles.content]}>
              <View style={[styles.textRow]}>
                <RkText rkType='subtitle'>Card Code</RkText>
              </View>
              <PasswordTextInput maxLength={3}
                                 keyboardType='numeric'
                                 onChangeText={(cardCode) => this.setState({cardCode})}
                                 value={this.state.cardCode}/>
            </View>
          </View>
          <View>
            <GradientButton rkType='large' text='ADD TO CARD' onPress={() => {
              this.props.navigation.goBack()
            }}/>
          </View>
        </View>
      </RkAvoidKeyboard>*/
    /*  <View style={{flex: 1}}>
          <SwipeableViews style={styles.slideContainer}>
            <View style={[styles.slide, styles.slide1]}>
              <RkText style={styles.text} rkType='header1'>
                Lend Or Borrow
                <RkButton rkType='clear'>
                    <RkText rkType='header6' onPress={() => this.props.navigation.navigate('Lend')}>
                        //Sign up now
                        Lend
                    </RkText>
                </RkButton>

                <RkButton rkType='clear'>
                    <RkText rkType='header6' onPress={() => this.props.navigation.navigate('Borrow')}>
                        //Sign up now
                        Borrow
                    </RkText>
                </RkButton>
              </RkText>
            </View>

            <View style={[styles.slide, styles.slide2]}>
              <RkText style={styles.text} rkType='header1'>
                Enter Amount
              </RkText>

            </View>  */


            <View style={[styles.slide, styles.slide3]} rkType='header1'>
              <RkText style={styles.text}>
                Lend Or Borrow

              </RkText>

            </View>

            <View style={[styles.slide, styles.slide3]} rkType='header1'>
              <RkText style={styles.text}>
                Find Friend

              </RkText>

            </View>

            <View style={[styles.slide, styles.slide4]}>
              <RkText style={styles.text} rkType='header1'>
                Interest Rate?
              </RkText>

            </View>

          </SwipeableViews>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    padding: 15,
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
  },
  slide: {
    padding: 15,
    flex: 1
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#FEA900',
  },
  slide3: {
    backgroundColor: '#FEA900',
  },
  slide4: {
    backgroundColor: '#FEA900',
  },
  text: {
    color: '#fff',

  }
}));
