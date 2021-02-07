import {createContext} from 'react';

export interface IContext {
  state: {
    prevOperand: null | number;
    operator: null | number;
    currentOperand: null | number;
    equal: boolean | string;
    memory: null | number;
    result: null | number;
  };
  handleButton: (button: number | string) => void;
}

export const MyContext = createContext<IContext>({
  state: {
    prevOperand: null,
    operator: null,
    currentOperand: null,
    equal: false,
    memory: null,
    result: null,
  },
  handleButton: () => {},
});
