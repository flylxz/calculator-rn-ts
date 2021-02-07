import React, {FC, ReactNode} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {COLORS, SIZES} from '../constants';

interface Props {
  item: {
    icon?: any;
    value: string | number;
    style?: {};
    x2?: number;
  };
  handlePress: (value: string | number) => void;
}

export const Button: FC<Props> = ({
  item: {icon, value, style, x2},
  handlePress,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        width: x2 || SIZES.btnSize,
        ...style,
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
    backgroundColor: COLORS.grey,
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
