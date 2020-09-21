/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import configureStore from './src/redux/configureStore';
import {NavigationContainer} from './src/navigation/NavigationContainer';
import {NavigationContainer as AppNavigationContainer} from '@react-navigation/native';

const store = configureStore();

const AppContainer = () => {
  return (
    <StoreProvider store={store}>
      <AppNavigationContainer>
        <NavigationContainer />
      </AppNavigationContainer>
    </StoreProvider>
  );
};

export default AppContainer;
