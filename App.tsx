/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Routes from './src/routes';

const App = () => {
  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <Routes />
      </GestureHandlerRootView>
    </>
  );
};

export default App;
