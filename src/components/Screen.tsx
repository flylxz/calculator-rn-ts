import React, {FC, useContext} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';

import {COLORS, SIZES} from '../constants';
import {MyContext, IContext} from '../context/myContext';

export const Screen: FC = () => {
  const {state} = useContext<IContext>(MyContext);

  const {currentOperand, prevOperand, operator, result, equal} = state;

  const isInteger = (number: number): number | string => {
    if (Number.isInteger(number)) {
      return number;
    } else {
      return number.toFixed(7);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.screen}
      contentOffset={{x: 0, y: 50}}>
      <Text style={styles.text}>
        {prevOperand}
        {operator}
        {currentOperand}
        {equal && '='}
        {result && isInteger(result)}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: SIZES.height * 0.2,
    backgroundColor: COLORS.black,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    color: COLORS.white,
    fontSize: SIZES.fontScreen,
    margin: SIZES.base / 3,
    fontFamily: 'HelveticaRegular',
  },
});
