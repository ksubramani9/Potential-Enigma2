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
import SingleTransactionItem from '../../components/singleTransactionView';
export class Transactions extends React.Component {
    static navigationOptions = {
        title: 'User Dashboard'.toUpperCase()
    };

    constructor(props) {
        super(props);
        this.data = data.getUser();
        console.log(this.data.firstName);
        this.renderItem = this._renderItem.bind(this);
    }

    _keyExtractor(post) {
        return post.id;

    }

    _renderItem(info) {
        return (
            <SingleTransactionItem transaction={info.item}/>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.data.transactions}
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
    paddingHorizontal: 14,
    flex: 1
  },
  card: {
    marginVertical: 8,
  },
  post: {
    marginTop: 13
  }
}));
