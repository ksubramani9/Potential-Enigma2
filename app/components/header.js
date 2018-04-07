import React, { Component } from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import stylesheet from '../assets/Stylesheet';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[stylesheet.transactions.header, stylesheet.transactions.bordered]}>
                <RkText rkType='header2'>{this.props.name}</RkText>
            </View>
        );
    }
}

export default Header;
