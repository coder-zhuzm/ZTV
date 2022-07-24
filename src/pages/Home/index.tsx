import {Text, View, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import Header from '@/components/Header';
import Tabs from './Tabs';
const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const styles = StyleSheet.create({
    container: {
      // margin: 10,
      height: '100%',
      backgroundColor: isDarkMode ? '#141414' : '#FFFFFF',
      color: isDarkMode ? '#FFFFFF' : '#000000',
    },
  });
  return (
    <View style={styles.container}>
      <Header />
      <Tabs />
    </View>
  );
};

export default Home;
