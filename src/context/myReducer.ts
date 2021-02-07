import {
  handleEqual,
  handleMR,
  handleNumber,
  handleOperator,
  resetState,
} from '../controllers';

import {IState, IAction, ActionTypes} from '../types/types';

export const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case ActionTypes.NUMBER_INPUT:
      return handleNumber(state, action);
    case ActionTypes.PLUS:
      return handleOperator(state, action);
    case ActionTypes.MINUS:
      return handleOperator(state, action);
    case ActionTypes.TIMES:
      return handleOperator(state, action);
    case ActionTypes.OBELUS:
      return handleOperator(state, action);
    case ActionTypes.PERCENTAGE:
      return {
        ...state,
        currentOperand: (state.prevOperand * state.currentOperand) / 100,
      };
    case ActionTypes.EQUAL:
      return handleEqual(state);
    case ActionTypes.PLUS_MINUS:
      return {...state, currentOperand: -state.currentOperand};
    case ActionTypes.MEMORY_RECORD:
      return handleMR(state);
    case ActionTypes.MEMORY_CLEAR:
      return {...state, memory: null};
    case ActionTypes.MEMORY_PLUS:
      return {...state, currentOperand: state.memory};
    case ActionTypes.MEMORY_MINUS:
      return {...state, currentOperand: -state.memory};
    case ActionTypes.ALL_CLEAR:
      return resetState(state);
    default:
      return {...state};
  }
};
