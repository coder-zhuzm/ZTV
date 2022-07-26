import {ScrollView, StyleSheet, Platform} from 'react-native';
import React, {useState} from 'react';
// import MovieTab from './MovieTab';
// import TvTab from './TvTab';
import {Tabs} from '@ant-design/react-native';
import HomeTab from './HomeTab';
import MovieTab from './MovieTab';
import TvTab from './TvTab';
import {useTheme} from '@react-navigation/native';

export default () => {
  const {colors} = useTheme();

  const [items] = useState([
    {title: '推荐', components: <HomeTab />},
    {title: '电影', params: <MovieTab />},
    {title: '电视剧', params: <TvTab />},
    {title: '综艺', params: 'variety'},
    {title: '动漫', params: 'carton'},
    {title: '直播', params: 'live'},
  ]);
  return (
    <Tabs
      tabs={items}
      tabBarPosition="top"
      style={styles.container}
      tabBarBackgroundColor={colors.background}
      tabBarInactiveTextColor={colors.text}
      tabBarActiveTextColor={colors.primary}
      prerenderingSiblingsNumber={1}>
      {/* 至少有两个 */}
      <ScrollView style={styles.item}>
        <HomeTab />
      </ScrollView>
      <ScrollView style={styles.item}>
        <MovieTab />
      </ScrollView>
      <ScrollView style={styles.item}>
        <TvTab />
      </ScrollView>
      <ScrollView style={styles.item}>
        <TvTab />
      </ScrollView>
      <ScrollView style={styles.item}>
        <TvTab />
      </ScrollView>
      <ScrollView style={styles.item}>
        <TvTab />
      </ScrollView>
    </Tabs>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    // backgroundColor: 'red',
  },
});
