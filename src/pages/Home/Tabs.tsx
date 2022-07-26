import {StyleSheet, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HomeTab from './HomeTab';
import MovieTab from './MovieTab';
import TvTab from './TvTab';
import {useTheme} from '@react-navigation/native';

export default () => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    //引入 theme 颜色
    tabBarStyle: {
      //tabs 整体 样式
      width: 'auto',
      backgroundColor: 'transparent', //整体背景颜色  默认是他主题蓝色
    },
    tabStyle: {
      //tabs item 样式
      width: 80,
    },
    indicatorContainerStyle: {
      backgroundColor: colors.background,
    },
    indicatorStyle: {
      // backgroundColor: '#bf2c2c',
      backgroundColor: colors.primary,
      width: 50,
      height: 3,
      borderRadius: 30,
      position: 'absolute',
      left: 15,
    },
    type1: {
      flex: 1,
      backgroundColor: '#673ab7',
    },
    type2: {
      flex: 1,
      backgroundColor: '#ff4081',
    },
  });
  const [routes] = useState([
    {title: '推荐', key: 'home'},
    {title: '电影', key: 'movie'},
    {title: '电视剧', key: 'tv'},
    {title: '综艺', key: 'variety'},
    {title: '动漫', key: 'carton'},
    {title: '直播', key: 'live'},
  ]);
  const SecondRoute = () => <View style={styles.type1} />;
  const ThirdRoute = () => <View style={styles.type2} />;
  const renderScene = SceneMap({
    home: HomeTab,
    movie: MovieTab,
    tv: TvTab,
    variety: SecondRoute,
    carton: ThirdRoute,
    live: SecondRoute,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            tabStyle={styles.tabStyle}
            style={styles.tabBarStyle}
            scrollEnabled={true}
            // contentContainerStyle={{flexDirection: 'row'}} //整个容器样式
            // labelStyle={{backgroundColor: colors.background}}  // 标签样式
            indicatorContainerStyle={styles.indicatorContainerStyle} //整个 tabs 样式
            indicatorStyle={styles.indicatorStyle} //指示器样式
            activeColor={colors.primary}
            inactiveColor={colors.text}
            bounces
          />
        )}
        lazy //路由懒加载
        swipeEnabled={true} //是否开启标签滑动
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};
