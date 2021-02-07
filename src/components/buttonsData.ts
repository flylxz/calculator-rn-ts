import {COLORS, Icons, SIZES} from '../constants';

export const buttonsData = [
  {
    value: 'AC',
    style: {backgroundColor: COLORS.lightgrey},
  },
  {
    icon: Icons.plusMinus,
    value: '+/-',
    style: {backgroundColor: COLORS.lightgrey},
  },
  {
    icon: Icons.percentage,
    value: '%',
    style: {backgroundColor: COLORS.lightgrey},
  },
  {
    icon: Icons.divide,
    value: '/',
    style: {backgroundColor: COLORS.orange},
  },
  {value: 'mc'},
  {value: 'mr'},
  {value: 'm-'},
  {
    value: 'm+',
    style: {backgroundColor: COLORS.orange},
  },
  {value: 7},
  {value: 8},
  {value: 9},
  {icon: Icons.times, value: 'x', style: {backgroundColor: COLORS.orange}},
  {value: 4},
  {value: 5},
  {value: 6},
  {icon: Icons.minus, value: '-', style: {backgroundColor: COLORS.orange}},
  {value: 1},
  {value: 2},
  {value: 3},
  {icon: Icons.plus, value: '+', style: {backgroundColor: COLORS.orange}},
  {
    value: 0,
    x2: SIZES.btnSize * 2 + SIZES.marginBtn * 2,
  },
  {value: '.', style: {justifyContent: 'flex-end'}},
  {icon: Icons.equals, value: '=', style: {backgroundColor: COLORS.orange}},
];
