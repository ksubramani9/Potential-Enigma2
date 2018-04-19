import React from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import {NavigationActions} from 'react-navigation';
import {Avatar} from '../../components';
import {Gallery} from '../../components';
import {GradientButton} from '../../components';
import {data} from '../../data';
import formatNumber from '../../utils/textUtils';
import stylesheet from '../../assets/Stylesheet'
import { MenuRoutes } from '../../config/navigation/routes';
// import transactionsList from  '../../data/index'
export class Profile extends React.Component {
  static navigationOptions = {
    title: 'User Profile'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.user = data.getUser();
    this._navigateAction = this._navigate.bind(this);
  }

  _navigate(route) {
      let resetAction = NavigationActions.reset({
          index: 0,
          actions: [
              NavigationActions.navigate({routeName: route.id})
          ]
      });
      this.props.navigation.dispatch(resetAction)
  }

  render() {
    let name = `${this.user.firstName} ${this.user.lastName}`;
    let images = this.user.images;
    return (
      <ScrollView style={stylesheet.profile.root}>
        <View style={[stylesheet.profile.header, stylesheet.profile.bordered]}>
            <Avatar img={this.user.photo} rkType='big'/>
            <RkText rkType='header2'>{name}</RkText>
            <GradientButton style={stylesheet.profile.button} onPress={() => {
                this._navigateAction(MenuRoutes[4])
            }} text='REQUEST LOAN'/>
        </View>

        <View style={stylesheet.profile.userInfo}>
          <View style={stylesheet.profile.section}>
            <RkText rkType='header3' style={stylesheet.profile.space}>{formatNumber(this.user.lendCount)}</RkText>
            <RkText rkType='secondary1 hintColor'>Amount Owed</RkText>
          </View>
          <View style={stylesheet.profile.section}>
            <RkText rkType='header3' style={stylesheet.profile.space}>{formatNumber(this.user.borrowCount)}</RkText>
            <RkText rkType='secondary1 hintColor'>Amount lent</RkText>
          </View>
          <View style={stylesheet.profile.section}>
            <RkText rkType='header3' style={stylesheet.profile.space}>{formatNumber(this.user.friendsCount)}</RkText>
            <RkText rkType='secondary1 hintColor'>Friends</RkText>
          // </View>
        </View>
        <TransactionsList/>
      </ScrollView>
    )
  }
}
