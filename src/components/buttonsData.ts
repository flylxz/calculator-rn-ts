import {COLORS, Icons, SIZES} from '../constants';

export const buttonsData = [
  {
    value: 'AC',
    bgColor: COLORS.lightgrey,
  },
  {
    icon: Icons.plusMinus,
    value: '+/-',
    bgColor: COLORS.lightgrey,
  },
  {icon: Icons.percentage, value: '%', bgColor: COLORS.lightgrey},
  {
    icon: Icons.divide,
    value: '/',
    bgColor: COLORS.orange,
  },
  {value: 'mc'},
  {value: 'mr'},
  {value: 'm-'},
  {
    value: 'm+',
    bgColor: COLORS.orange,
  },
  {value: 7},
  {value: 8},
  {value: 9},
  {icon: Icons.times, value: 'x', bgColor: COLORS.orange},
  {value: 4},
  {value: 5},
  {value: 6},
  {icon: Icons.minus, value: '-', bgColor: COLORS.orange},
  {value: 1},
  {value: 2},
  {value: 3},
  {icon: Icons.plus, value: '+', bgColor: COLORS.orange},
  {
    value: 0,
    x2: SIZES.btnSize * 2 + SIZES.marginBtn * 2,
  },
  {icon: Icons.comma, value: '.'},
  {icon: Icons.equals, value: '=', bgColor: COLORS.orange},
];
