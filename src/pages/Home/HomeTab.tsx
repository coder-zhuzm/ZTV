import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import HomeCarousel from './HomeCarousel';
import PlateCard from '@/components/PlateCard';

const HomeTab = () => {
  return (
    <ScrollView style={styles.container}>
      <HomeCarousel />
      <PlateCard type="hot" />
      <PlateCard type="movie" />
      <PlateCard type="tv" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
export default HomeTab;
