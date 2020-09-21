import React from 'react';
import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-elements';
import SwipeButton from 'rn-swipe-button';

const styles = StyleSheet.create({
  buttonViewStyle: {
    margin: 10,
    justifyContent: 'flex-end',
    flex: 1,
  },
  variationTextStyle: {
    color: 'yellow',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
});

export const HomeScreen = ({navigation}) => {
  const updateSwipeStatusMessage = () => navigation.navigate('Login');
  const leftThumbIcon = () => {
    return (
      <Image
        style={{width: 20, height: 20}}
        source={require('../images/diamond.png')}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={{flex: 1}}>
        <View style={styles.buttonViewStyle}>
          <Text style={styles.variationTextStyle}>
            {'4 variations of a button'}
          </Text>
          <Button
            title="Press me"
            type={'clear'}
            buttonStyle={{height: 50}}
            onPress={() => navigation.navigate('Login')}
            containerStyle={{marginBottom: 15, marginHorizontal: 10}}
          />
          <Button
            title="Press me"
            type={'outline'}
            buttonStyle={{
              height: 50,
              borderRadius: 8,
              backgroundColor: '#404040',
            }}
            containerStyle={{marginBottom: 15}}
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            title="Press me"
            type={'outline'}
            titleStyle={{color: 'white'}}
            buttonStyle={{
              height: 50,
              backgroundColor: '#80b3ff',
              borderRadius: 8,
            }}
            containerStyle={{marginBottom: 15}}
            onPress={() => navigation.navigate('Login')}
          />
          <SwipeButton
            enableRightToLeftSwipe={false}
            thumbIconBackgroundColor="#3399ff"
            thumbIconComponent={leftThumbIcon}
            railFillBorderColor="transparent"
            railStyles={{borderRadius: 0}}
            railFillBackgroundColor="#3399ff"
            thumbIconStyles={{borderRadius: 10}}
            railBackgroundColor="transparent"
            title="Slide me to continue"
            titleColor="#3399ff"
            onSwipeSuccess={() => updateSwipeStatusMessage()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
