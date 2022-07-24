import React from 'react';
import {StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
import Navigator from './navigator/index';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
        />
        <Navigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
