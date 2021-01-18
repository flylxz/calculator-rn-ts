import {Alert} from 'react-native';

export const resetState = (state) => {
  return {
    ...state,
    prevOperand: null,
    operator: null,
    currentOperand: null,
    equal: false,
    result: null,
  };
};

export const handleOperator = (state, action) => {
  if (
    (!state.currentOperand && action.payload === '+') ||
    (!state.currentOperand && action.payload === 'x') ||
    (!state.currentOperand && action.payload === '/')
  ) {
    return {...state};
  } else if ((!state.currentOperand && action.payload === '-') || state.equal) {
    return {
      ...state,
      currentOperand: action.payload,
      prevOperand: null,
      operator: null,
      equal: false,
      result: null,
    };
  } else {
    return {
      ...state,
      prevOperand: state.currentOperand,
      operator: action.payload,
      currentOperand: null,
    };
  }
};

export const handleNumber = (state, action) => {
  if (state.equal) {
    return {
      ...state,
      prevOperand: null,
      operator: null,
      currentOperand: action.payload,
      equal: false,
      result: null,
    };
  } else {
    return {
      ...state,
      currentOperand: [state.currentOperand, action.payload].join(''),
    };
  }
};

const handleResult = {
  '+': (state) => +state.prevOperand + +state.currentOperand,
  '-': (state) => +state.prevOperand - +state.currentOperand,
  x: (state) => +state.prevOperand * +state.currentOperand,
  '/': (state) => +state.prevOperand / +state.currentOperand,
};

export const handleEqual = (state) => {
  if (state.prevOperand && state.currentOperand) {
    return {
      ...state,
      result: handleResult[state.operator](state),
      equal: true,
    };
  } else {
    Alert.alert('Insufficient data', 'Please enter number');
    return {...state};
  }
};

export const handleMR = (state) => {
  if (state.result) {
    return {...state, memory: state.result};
  } else if (state.currentOperand) {
    return {...state, memory: state.currentOperand};
  } else {
    return {...state};
  }
};
