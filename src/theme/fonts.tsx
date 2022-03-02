import {TextStyle} from 'react-native';

export const Fonts: Record<
  'ExtraBig' | 'Big' | 'Title' | 'Body' | 'Subtitle' | 'Detail' | 'Heading',
  TextStyle
> = {
  ExtraBig: {
    fontFamily: 'OpenSans-ExtraBold',
    fontWeight: '500',
    fontSize: 42,
    lineHeight: 50,
  },
  Big: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: '500',
    fontSize: 32,
    lineHeight: 38,
  },
  Heading: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: '400',
    fontSize: 22,
    lineHeight: 24,
  },
  Title: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 19,
  },
  Body: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    lineHeight: 17,
  },
  Subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16,
  },
  Detail: {
    fontFamily: 'OpenSans-Light',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 12,
  },
};
