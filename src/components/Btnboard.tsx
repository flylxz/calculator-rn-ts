import React, {FC, useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import {COLORS, SIZES} from '../constants';
import {buttonsData} from './buttonsData';
import {Button} from './Button';
import {MyContext, IContext} from '../context/myContext';

export const Btnboard: FC = () => {
  const {handleButton} = useContext<IContext>(MyContext);
  const handlePress = (value: number | string): void => handleButton(value);

  return (
    <View style={styles.board}>
      <FlatList
        data={buttonsData}
        renderItem={({item}) => (
          <Button item={item} handlePress={handlePress} />
        )}
        keyExtractor={({value}) => value.toString()}
        numColumns={4}
        horizontal={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  board: {
    height: SIZES.height * 0.8,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
