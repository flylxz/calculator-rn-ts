import React from 'react';
import {Image} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {COLORS, SIZES} from './theme';

const plus = <FAIcon name="plus" size={SIZES.iconSize} color={COLORS.white} />;

const minus = (
  <FAIcon name="minus" size={SIZES.iconSize} color={COLORS.white} />
);

const times = (
  <FAIcon name="times" size={SIZES.iconSize} color={COLORS.white} />
);

const divide = (
  <FAIcon name="divide" size={SIZES.iconSize} color={COLORS.white} />
);

const equals = (
  <FAIcon name="equals" size={SIZES.iconSize} color={COLORS.white} />
);

const percentage = (
  <Image
    source={require('../../assets/icons/percentage.png')}
    resizeMode="contain"
    style={{
      width: SIZES.iconSize,
      height: SIZES.iconSize,
      tintColor: COLORS.white,
    }}
  />
);

const plusMinus = (
  <Image
    source={require('../../assets/icons/plus-minus.png')}
    resizeMode="contain"
    style={{
      width: SIZES.iconSize,
      height: SIZES.iconSize,
      tintColor: COLORS.white,
    }}
  />
);

// const comma = (
//   <Image
//     source={require('../../assets/icons/comma.png')}
//     resizeMode="contain"
//     style={{
//       width: SIZES.iconSize,
//       height: SIZES.iconSize,
//       tintColor: COLORS.white,
//     }}
//   />
// );

const comma = (
  <FAIcon name="comma" size={SIZES.iconSize} color={COLORS.white} />
);

export default {
  plus,
  minus,
  times,
  divide,
  equals,
  percentage,
  plusMinus,
  comma,
};
