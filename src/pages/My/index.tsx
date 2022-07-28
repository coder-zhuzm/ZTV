import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

const My = () => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    title: {
      color: colors.text,
    },
  });
  return (
    <SafeAreaView>
      <Text style={styles.title}>My</Text>
    </SafeAreaView>
  );
};

export default My;
