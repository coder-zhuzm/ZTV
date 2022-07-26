import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import Navigator from './navigator/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
};
