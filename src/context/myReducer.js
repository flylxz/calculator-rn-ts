import {
  handleEqual,
  handleMR,
  handleNumber,
  handleOperator,
  resetState,
} from '../controllers/';

export const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return handleNumber(state, action);
    case '+':
      return handleOperatorperator(state, action);
    case '-':
      return handleOperator(state, action);
    case 'x':
      return handleOperator(state, action);
    case '/':
      return handleOperator(state, action);
    case '%':
      return {
        ...state,
        currentOperand: (state.prevOperand * state.currentOperand) / 100,
      };
    case '=':
      return handleEqual(state);
    case '+/-':
      return {...state, currentOperand: -state.currentOperand};
    case 'mr':
      return handleMR(state, action);
    case 'mc':
      return {...state, memory: null};
    case 'm+':
      return {...state, currentOperand: state.memory};
    case 'm-':
      return {...state, currentOperand: -state.memory};
    case 'AC':
      return resetState(state);
    default:
      return {...state};
  }
};
