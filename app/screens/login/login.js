import React from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard
} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard,
    RkStyleSheet,
    RkTheme
} from 'react-native-ui-kitten';
import {FontAwesome} from '../../assets/icons';
import {GradientButton} from '../../components/gradientButton';
import {scale, scaleModerate, scaleVertical} from '../../utils/scale';
import stylesheet from "../../assets/Stylesheet";
import {data} from '../../data';

export class Login extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.user = data.getUser();
        this.state = {
            username: '',
            password: ''
        }
    }

    onLogin() {
        if (this.state.username === this.user.username && this.state.password === this.user.password) {
            this.props.navigation.navigate('App');
        }
    }

    _renderImage(image) {
        let contentHeight = scaleModerate(375, 1);
        let height = Dimensions.get('window').height - contentHeight;
        let width = Dimensions.get('window').width;

        if (RkTheme.current.name === 'light')
            image = (<Image style={[stylesheet.login.image, {height, width}]}
                            source={require('../../assets/images/backgroundLoginV1.png')}/>);
        else
            image = (<Image style={[stylesheet.login.image, {height, width}]}
                            source={require('../../assets/images/backgroundLoginV1DarkTheme.png')}/>);
        return image;
    }

    render() {
        let image = this._renderImage();

        return (
            <RkAvoidKeyboard
                onStartShouldSetResponder={ (e) => true}
                onResponderRelease={ (e) => Keyboard.dismiss()}
                style={stylesheet.login.screen}>
                {image}
                <View style={stylesheet.login.container}>
                    <View style={stylesheet.login.buttons}>
                        <RkButton style={stylesheet.login.button} rkType='social'>
                            <RkText rkType='awesome hero accentColor'>{FontAwesome.twitter}</RkText>
                        </RkButton>
                        <RkButton style={stylesheet.login.button} rkType='social'>
                            <RkText rkType='awesome hero accentColor'>{FontAwesome.google}</RkText>
                        </RkButton>
                        <RkButton style={stylesheet.login.button} rkType='social'>
                            <RkText rkType='awesome hero accentColor'>{FontAwesome.facebook}</RkText>
                        </RkButton>
                    </View>
                    <RkTextInput rkType='rounded' placeholder='Username' onChangeText={(text) => {
                        this.setState({ username: text })
                    }}/>
                    <RkTextInput rkType='rounded' placeholder='Password' onChangeText={(text) => {
                        this.setState({ password: text })
                    }} secureTextEntry={true}/>
                    <GradientButton onPress={() => {
                            this.props.navigation.navigate('App')
                    }} rkType='large' style={stylesheet.login.save} text='LOGIN' onPress={this.onLogin}/>
                    <View style={stylesheet.login.footer}>
                        <View style={stylesheet.login.textRow}>
                            <RkText rkType='primary3'>Don’t have an account?</RkText>
                            <RkButton rkType='clear'>
                                <RkText rkType='header6' onPress={() => this.props.navigation.navigate('SignUp')}>
                                    Sign up now
                                </RkText>
                            </RkButton>
                        </View>
                    </View>
                </View>
            </RkAvoidKeyboard>
        )
    }
}
