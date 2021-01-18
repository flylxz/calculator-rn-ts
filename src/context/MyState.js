import React, {useReducer} from 'react';

import {MyContext} from './myContext';
import {reducer} from './myReducer';

export const MyState = ({children}) => {
  const initialState = {
    prevOperand: null,
    operator: null,
    currentOperand: null,
    equal: false,
    memory: null,
    result: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButton = (button) => {
    if (typeof button === 'number' || button === '.') {
      dispatch({type: 'input', payload: button});
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
