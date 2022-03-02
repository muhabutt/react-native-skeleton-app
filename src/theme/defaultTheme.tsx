/**
 * Default theme
 */
import {Colors} from './colors';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const defaultTheme = {
  Button: {
    containerStyle: {
      marginHorizontal: hp('5%'),
    },
    buttonStyle: {
      width: '100%',
      borderRadius: 15,
      padding: hp('3%'),
      backgroundColor: Colors.RoyalBlue,
    },
    titleStyle: {
      color: Colors.White,
      fontFamily: 'OpenSans-Medium',
      fontSize: hp('3%'),
    },
  },
};
