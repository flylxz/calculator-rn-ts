import React, {useReducer} from 'react';
import {ActionTypes} from '../types/types';

import {MyContext} from './myContext';
import {reducer} from './myReducer';

export const MyState = ({children}: any) => {
  const initialState = {
    prevOperand: null,
    operator: null,
    currentOperand: null,
    equal: false,
    memory: null,
    result: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButton = (button: number | string) => {
    if (typeof button === 'number' || button === '.') {
      dispatch({type: ActionTypes.NUMBER_INPUT, payload: button});
    } else {
      dispatch({type: button, payload: button});
    }
  };

  return (
    <MyContext.Provider value={{state, handleButton}}>
      {children}
    </MyContext.Provider>
  );
};
