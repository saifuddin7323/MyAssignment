import React, {useState} from 'react';
import {SafeAreaView, View, Alert} from 'react-native';
import {AppHeader} from '../components/Header';
import {Input, Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {updateUserName} from '../redux/actions/UserAction';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/NavigationContainer';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<LoginScreenProps> = (props) => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const updateName = (value: string) => {
    if (userName) {
      dispatch(updateUserName(value));
      props.navigation.navigate('Welcome');
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
