import {StyleSheet} from 'react-native';
import React from 'react';
import Header from '@/components/Header'; // 顶部搜索 及 观看历史按钮
import Tabs from './Tabs'; // tab 组件

import {SafeAreaView} from 'react-native-safe-area-context';
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
    </SafeAreaView>
  );
};

export default Home;
