import React, {FC} from 'react';

import {MyState} from '../context/MyState';
import {Screen, Btnboard} from '../components';

export const Main: FC = () => {
  return (
    <MyState>
      <Screen />
      <Btnboard />
    </MyState>
  );
};
