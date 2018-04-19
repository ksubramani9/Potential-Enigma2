import React from 'react';
import {
    SwitchNavigator,
    DrawerNavigator,
    StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
import {AppRoutes} from './config/navigation/routesBuilder';
import * as Screens from './screens';
import {bootstrap} from './config/bootstrap';
import track from './config/analytics';
import {data} from './data'
import {AppLoading, Font} from 'expo';
import {View} from "react-native";

bootstrap();
data.populateData();

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

let SideMenu = withRkTheme(Screens.SideMenu);

const AuthStack = StackNavigator({
    SignUp: {screen: Screens.SignUp},
    Login: {screen: Screens.Login},
    Reset: {screen: Screens.PasswordRecovery}
})

const AppNav = DrawerNavigator(
    {
        Home: AppRoutes.Home,
        Settings: AppRoutes.Settings,
        Payments: AppRoutes.Payments,
        // Profile: AppRoutes.Profile
    },
    {
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
        contentComponent: (props) => <SideMenu {...props}/>
});

const MainNavigation = SwitchNavigator({
    /* Splash: {screen: Screens.SplashScreen},*/
    App: {screen: AppNav},
    Auth: {screen: AuthStack}
}, {
    initialRouteName: 'Auth'
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            username: ''
        };
    }

    componentWillMount() {
        this._loadAssets();
    }

    _loadAssets = async() => {
        await Font.loadAsync({
            'fontawesome': require('./assets/fonts/fontawesome.ttf'),
            'icomoon': require('./assets/fonts/icomoon.ttf'),
            'Righteous-Regular': require('./assets/fonts/Righteous-Regular.ttf'),
            'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
            'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
            'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
            'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        });
        this.setState({loaded: true});
    };

    render() {
        if (!this.state.loaded) {
            return <AppLoading />;
        }

        return (
            <View style={{flex: 1}}>
                <MainNavigation/>
            </View>
        );
    }
}
export default App;
Expo.registerRootComponent(App);
