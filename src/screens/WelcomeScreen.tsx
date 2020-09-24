import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {AppHeader} from '../components/Header';
import {Button} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/NavigationContainer';
import {userState} from '../redux/reducer/UserReducer';

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type WelcomeScreenProps = {
  navigation: WelcomeScreenNavigationProp;
};

const styles = StyleSheet.create({
  buttonViewStyle: {
    margin: 10,
    justifyContent: 'center',
    flex: 1,
  },
});

export const WelcomeScreen: React.FC<WelcomeScreenProps> = (props) => {
  const user_name = useSelector((state: userState) => state.user_name);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <AppHeader
          centerTitle={'Welcome'}
          rightTitle={user_name}
          leftIcon
          onLeftIconPress={() => props.navigation.goBack()}
        />
        <View style={styles.buttonViewStyle}>
          <Button
            title="Go to Home"
            type={'outline'}
            onPress={() => props.navigation.navigate('Home')}
            style={{marginHorizontal: 10}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
