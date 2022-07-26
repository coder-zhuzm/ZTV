import {ScrollView} from 'react-native';
import React from 'react';
import PlateCard from '@/components/PlateCard';

const MovieTab = () => {
  return (
    <ScrollView>
      <PlateCard type="movie" hasHeader={false} />
      <PlateCard type="movie" hasHeader={false} />
      <PlateCard type="movie" hasHeader={false} />
      <PlateCard type="movie" hasHeader={false} />
    </ScrollView>
  );
};

export default MovieTab;
