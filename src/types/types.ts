export interface IState {
  prevOperand: null | number | any;
  operator: null | number | any;
  currentOperand: null | number | any;
  equal: boolean | string | any;
  memory: null | number | any;
  result: null | number | any;
}

export interface IAction {
  type: string;
  payload?: string | number;
}

export enum ActionTypes {
  NUMBER_INPUT = 'input',
  PLUS = '+',
  MINUS = '-',
  TIMES = 'x',
  OBELUS = '/',
  PERCENTAGE = '%',
  EQUAL = '=',
  PLUS_MINUS = '+/-',
  MEMORY_RECORD = 'mr',
  MEMORY_CLEAR = 'mc',
  MEMORY_PLUS = 'm+',
  MEMORY_MINUS = 'm-',
  ALL_CLEAR = 'AC',
}
