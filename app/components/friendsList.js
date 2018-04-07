import { SectionList, Text, View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import React, { Component } from 'react';
import {data} from '../data';
import stylesheet from '../assets/Stylesheet';
import Header from './header';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.user = data.getUser();
        //console.log(this.user.transactions);
    }

    render() {
        return (
            <SectionList
                sections={[
                    {
                        title: 'Lend Transactions',
                        data: this.user.lendingTransactions
                    }, {
                        title: 'Borrow Transactions',
                        data: this.user.borrowingTransactions
                    }
                ]}
                renderItem={({item}) => (
                    <View style={stylesheet.list.row}>
                        <RkText style={stylesheet.list.bullet}>{'\u2022' + " "}</RkText>
                        <RkText style={stylesheet.transactions.text}>{item}</RkText>
                    </View>
                )}
                renderSectionHeader={({section}) => <Header name={section.title}/>}
                />
        );
    }
}

export default FriendsList;
