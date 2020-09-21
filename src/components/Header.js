import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';

export const AppHeader = (props) => {
  const leftComponent = () => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={props.onLeftIconPress}>
        <Image source={require('../images/backArrow.png')} />
      </TouchableOpacity>
    );
  };

  return (
    <Header
      statusBarProps={{barStyle: 'dark-content'}}
      containerStyle={{backgroundColor: 'white'}}
      leftComponent={props.leftIcon ? leftComponent : null}
      centerComponent={{
        text: props.centerTitle,
        style: {color: '#01475b', fontSize: 20},
      }}
      rightComponent={{
        text: props.rightTitle,
        style: {color: '#01475b', fontSize: 16},
      }}
    />
  );
};
