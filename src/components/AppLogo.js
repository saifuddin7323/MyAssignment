import React from 'react';
import {Image} from 'react-native';

export const AppLogo = (props) => (
  <Image
    style={{width: 150, height: 150}}
    {...props}
    source={require('../images/ic_investec_app_logo.png')}
  />
);
