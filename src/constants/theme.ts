import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
console.log(width, height);

export const COLORS = {
  black: '#000',
  grey: '#333333',
  lightgrey: '#A5A5A5',
  white: '#FFF',
  orange: '#FF9708',
};

export const SIZES = {
  base: 12,
  fontScreen: 48,
  fontBtn: 36,
  radius: 50,
  btnSize: width * 0.2,
  iconSize: 30,
  marginBtn: width * 0.02,
  width,
  height,
};
