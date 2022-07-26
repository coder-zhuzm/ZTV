import {ScrollView, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import Header from '@/components/Header';
import Tabs from './Tabs';
import PlateCard from '@/components/PlateCard';
import HomeCarousel from './HomeCarousel';

import {SafeAreaView} from 'react-native-safe-area-context';
import GridCard from '@/components/PlateCard/gridCard';
import HomeTab from './HomeTab';
const Home = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Tabs />
      {/* <HomeTab /> */}
    </SafeAreaView>
  );
};

export default Home;
