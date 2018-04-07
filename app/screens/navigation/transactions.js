import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {SocialBar} from '../../components';
import {data} from '../../data';


export class Transactions extends React.Component {
    static navigationOptions = {
        title: 'User Dashboard'.toUpperCase()
    };

    constructor(props) {
        super(props);
        console.log(this.props.navigation.state.username);
        //this.data = data.getFriends();
        this.renderItem = this._renderItem.bind(this);
    }

    _keyExtractor(post) {
        return post.id;
    }

    _renderItem(info) {
        //let transactions = data.getTransactions(info.item.id);
        return (
            //transactions.forEach(function(transactionType) {
                <TouchableOpacity
                    delayPressIn={70}
                    activeOpacity={0.8}>
          	        <RkCard rkType='horizontal' style={styles.card}>
            	        <Image rkCardImg source={info.item.photo}/>

                        <View rkCardContent>
                            <RkText numberOfLines={1} rkType='header6'>Header</RkText>
                            <RkText rkType='secondary6 hintColor'>
                                {`${info.item.firstName} ${info.item.lastName}`}
                            </RkText>
                            <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{info.item.text}</RkText>
                        </View>
                        <View rkCardFooter>
                            <SocialBar rkType='space' showLabel={true}/>
                        </View >
                    </RkCard>
                </TouchableOpacity>
            //})
        )
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.data}
                    renderItem={this.renderItem}
                    keyExtractor={this._keyExtractor}
                    style={styles.container}/>
            </View>
        )
    }
}


let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 14
  },
  card: {
    marginVertical: 8,
  },
  post: {
    marginTop: 13
  }
}));
