import {FontAwesome} from '../../assets/icons';
import * as Screens from '../../screens/index';
import _ from 'lodash';

let menuRoutes = [
    {
        id: 'Home',
        title: 'Home',
        icon: FontAwesome.home,
        screen: Screens.Transactions,
        children: []
    },
    {
        id: 'LoanRequest',
        title: 'Move Money',
        icon: FontAwesome.creditCard,
        screen: Screens.LoanRequest,
        children: []
    },
    /*{
        id: 'Profile',
        title: 'My Profile',
        icon: FontAwesome.user,
        screen: Screens.Profile,
        children: []

    },  */
    {
        id: 'Payments',
        title: 'Bank Info/Earnings',
        icon: FontAwesome.creditCard,
        screen: Screens.Payments,
        children: []
    }, {
        id: 'BankInformation',
        title: 'Card Information',
        icon: FontAwesome.creditCard,
        screen: Screens.AddToCardForm,
        children: []


    }, {
        id: 'Settings',
        title: 'Settings',
        icon: FontAwesome.cog,
        screen: Screens.Settings,
        children: []

    }
];

let mainRoutes = _.cloneDeep(menuRoutes).unshift({
    id: 'Login',
    title: 'Login',
    screen: Screens.Login,
    children: []
});

export const MenuRoutes = menuRoutes;
export const MainRoutes = mainRoutes;
