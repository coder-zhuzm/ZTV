import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigator from './navigator/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
      />
      <Navigator />
    </SafeAreaProvider>
  );
};
