import React from 'react';
import {Image, ImageStyle, StyleSheet} from 'react-native';

interface AppLogoProps {
  imageStyle?: ImageStyle;
}

const styles = StyleSheet.create({
  imgStyle: {
    width: 150,
    height: 150,
  },
});

export const AppLogo: React.FC<AppLogoProps> = (props) => (
  <Image
    style={[styles.imgStyle, props.imageStyle]}
    source={require('../images/ic_investec_app_logo.png')}
  />
);
