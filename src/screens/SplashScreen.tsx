import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  NativeModules,
  Text,
  Platform,
} from 'react-native';
import {AppLogo} from '../components/AppLogo';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/NavigationContainer';

type SplashScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type SplashScreenProps = {
  navigation: SplashScreenNavigationProp;
};

const NativeComm = NativeModules.ReactNativeBridge;

const styles = StyleSheet.create({
  mainViewStle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const SplashScreen: React.FC<SplashScreenProps> = (props) => {
  const [isSimulator, setIsSimulator] = useState(false);
  const appRunningText = `App running in ${
    Platform.OS === 'ios' ? 'Simulator' : 'Emulator'
  }`;
  useEffect(() => {
    NativeComm.isSimulatorEmulator().then((isSimulatorEmulator: boolean) => {
      setIsSimulator(isSimulatorEmulator);
    });
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.mainViewStle}>
      <AppLogo />
      <ActivityIndicator size={'large'} color={'black'} />
      {isSimulator ? (
        <Text style={{marginTop: 10}}>{appRunningText}</Text>
      ) : null}
    </SafeAreaView>
  );
};
