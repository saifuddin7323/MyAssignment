import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Platform, Alert} from 'react-native';
import {AppHeader} from '../components/Header';
import {Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {updateUserName} from '../redux/actions/UserAction';

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: '#00b38e',
    borderBottomWidth: 2,
    paddingBottom: 3,
    paddingLeft: Platform.OS === 'ios' ? 0 : -3,
    paddingTop: 0,
    color: '#01475b',
  },
});

export const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const updateName = (value) => {
    if (userName) {
      dispatch(updateUserName(value));
      navigation.navigate('Welcome');
      setUserName('');
    } else {
      Alert.alert('Error', 'Please enter user name');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppHeader centerTitle={'Login'} />
      <View style={{margin: 10}}>
        <Input
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholder="Enter user name"
          autoCorrect={false}
        />
        <Button
          title="SUBMIT"
          type={'outline'}
          onPress={() => updateName(userName)}
          style={{marginHorizontal: 10}}
        />
      </View>
    </SafeAreaView>
  );
};
