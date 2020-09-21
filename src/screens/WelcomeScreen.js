import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {AppHeader} from '../components/Header';
import {Button} from 'react-native-elements';

const styles = StyleSheet.create({
  buttonViewStyle: {
    margin: 10,
    justifyContent: 'center',
    flex: 1,
  },
});

export const WelcomeScreen = ({navigation}) => {
  const user_name = useSelector((state) => state.user_name);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <AppHeader
          centerTitle={'Welcome'}
          rightTitle={user_name}
          leftIcon
          onLeftIconPress={() => navigation.goBack()}
        />
        <View style={styles.buttonViewStyle}>
          <Button
            title="Go to Home"
            type={'outline'}
            onPress={() => navigation.navigate('Home')}
            style={{marginHorizontal: 10}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
