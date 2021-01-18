import React, {FC, ReactNode} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS, SIZES} from '../constants';

interface Props {
  item: {
    icon?: any;
    value: string | number;
    bgColor?: string;
    x2?: number;
  };
  handlePress: (value: string | number) => void;
}

export const Button: FC<Props> = ({
  item: {icon, value, bgColor, x2},
  handlePress,
}): JSX.Element => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        backgroundColor: bgColor || COLORS.grey,
        width: x2 || SIZES.btnSize,
      }}
      onPress={() => handlePress(value)}>
      <View>{icon ? icon : <Text style={styles.btnText}>{value}</Text>}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: SIZES.btnSize,
    width: SIZES.btnSize,
    borderRadius: SIZES.radius,
    margin: SIZES.marginBtn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.white,
    fontSize: SIZES.fontBtn,
    fontFamily: 'HelveticaRegular',
    textAlign: 'left',
  },
});
