import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Fonts} from './fonts';

const bottomTabIcon = {
  bottomTabIconSize: hp('3%'),
  iconStyle: {
    paddingVertical: hp('1%'),
  },
};
/**
 * Bottom Tab Styling
 */
const bottomTabBar = StyleSheet.create({
  tabLabelButton: {
    flexGrow: 1,
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabelText: {
    ...Fonts.Title,
    paddingVertical: hp('.5%'),
    textAlign: 'center',
  },
  tabLabelContainer: {
    flexDirection: 'row',
  },
});

/**
 * Common styling
 */
const base = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const styles = {
  ...base,
  ...bottomTabBar,
  ...bottomTabIcon,
};
