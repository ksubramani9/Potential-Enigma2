import React, { Component } from 'react';
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

class SingleTransactionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transaction: ''
        }
    }

    render() {
        return (
            <TouchableOpacity
                delayPressIn={70}
                activeOpacity={0.8}>
                <RkCard rkType='horizontal' style={styles.card}>
                    <View rkCardContent>
                        <RkText numberOfLines={1} rkType='header6'>{this.props.transaction.type}</RkText>
                        <RkText style={styles.post} numberOfLines={2} rkType='secondary1'>{this.props.transaction.description}</RkText>
                    </View>
                    {/*<View rkCardFooter>
                        <SocialBar rkType='space' showLabel={true}/>
                    </View >*/}
                </RkCard>
            </TouchableOpacity>
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

export default SingleTransactionItem;
