import {StyleSheet, useColorScheme, View} from 'react-native';
import React from 'react';
import Header from '@/components/Header';
import Tabs from './Tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
      bottom: 0,
      overflow: 'hidden',
      backgroundColor: 'red',
      // backgroundColor: isDarkMode ? '#000000' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tabs />
    </SafeAreaView>
  );
};

export default Home;
