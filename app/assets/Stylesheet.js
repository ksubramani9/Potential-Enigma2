import { RkStyleSheet } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import {scale, scaleModerate, scaleVertical} from '../utils/scale';


let stylesheet = RkStyleSheet.create(theme => ({
    login: {
        screen: {
            flex: 1,
            alignItems: 'center',
            backgroundColor: theme.colors.screen.base
        },
        image: {
            resizeMode: 'cover',
            marginBottom: scaleVertical(10),
        },
        container: {
            paddingHorizontal: 17,
            paddingBottom: scaleVertical(22),
            alignItems: 'center',
            flex: -1
        },
        footer: {
            justifyContent: 'flex-end',
            flex: 1
        },
        buttons: {
            flexDirection: 'row',
            marginBottom: scaleVertical(24)
        },
        button: {
            marginHorizontal: 14
        },
        save: {
            marginVertical: 9
        },
        textRow: {
            justifyContent: 'center',
            flexDirection: 'row',
        }
    }, signUp: {
        screen: {
          padding: 16,
          flex: 1,
          justifyContent: 'space-around',
          backgroundColor: theme.colors.screen.base
        },
        image: {
          marginBottom: 10,
          height:scaleVertical(77),
          resizeMode:'contain'
        },
        content: {
          justifyContent: 'space-between'
        },
        save: {
          marginVertical: 20
        },
        buttons: {
          flexDirection: 'row',
          marginBottom: 24,
          marginHorizontal: 24,
          justifyContent: 'space-around'
        },
        footer:{
          justifyContent:'flex-end'
      }, textRow: {
          justifyContent: 'center',
          flexDirection: 'row',
      }
    }, list: {
        item: {
          height: 80,
          //justifyContent: 'center',
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderColor: theme.colors.border.base,
          paddingHorizontal: 16
        },
        list: {
          backgroundColor: theme.colors.screen.base,
        },
        container: {
          flexDirection: 'row',
          alignItems: 'center'
        },
        icon: {
          width: 34,
          textAlign: 'center',
          marginRight: 16
        }, row: {
            flexDirection: 'row',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            flex: 1,
            paddingHorizontal: 16,
            paddingVertical: 12
        },
        bulletText: {
            flex: 1
        }
    }, profile: {
        root: {
            backgroundColor: theme.colors.screen.base
        },
        header: {
            alignItems: 'center',
            paddingTop: 25,
            paddingBottom: 17
        },
        userInfo: {
            flexDirection: 'row',
            paddingVertical: 18,
        },
        bordered: {
            borderBottomWidth: 1,
            borderColor: theme.colors.border.base
        },
        section: {
            flex: 1,
            alignItems: 'center'
        },
        space: {
            marginBottom: 3
        },
        separator: {
            backgroundColor: theme.colors.border.base,
            alignSelf: 'center',
            flexDirection: 'row',
            flex: 0,
            width: 1,
            height: 42
        },
        buttons: {
            flexDirection: 'row',
            paddingVertical: 8,
        },
        button: {
            marginTop: 18,
            alignSelf: 'center',
            width: 180
        }
    }, transactions: {
        bordered: {
            borderBottomWidth: 1,
            borderColor: theme.colors.border.base
        }, header: {
            alignItems: 'center',
            paddingTop: 25,
            paddingBottom: 17
        }, text: {
            marginLeft: 10
        }
    }, numberPad: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: theme.colors.screen.base
        }
    }
}));

export default stylesheet;
