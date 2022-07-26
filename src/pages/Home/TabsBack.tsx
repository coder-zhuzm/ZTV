import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React, {useState} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import HomeTab from './HomeTab';
import MovieTab from './MovieTab';
import TvTab from './TvTab';

export default () => {
  const [routes] = useState([
    {title: '推荐', key: 'home'},
    {title: '电影', key: 'movie'},
    {title: '电视剧', key: 'tv'},
    {title: '综艺', key: 'variety'},
    {title: '动漫', key: 'carton'},
    // {title: '直播', key: 'live'},
    // {title: '直播1', key: 'live1'},
  ]);
  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );
  const ThirdRoute = () => (
    <View style={{flex: 1, backgroundColor: '#ff4081'}} />
  );
  const renderScene = SceneMap({
    home: HomeTab,
    movie: MovieTab,
    tv: TvTab,
    variety: SecondRoute,
    carton: ThirdRoute,
    // live: SecondRoute,
    // live1: SecondRoute,
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TabView
        renderTabBar={props => (
          <TabBar
            {...props}
            style={styles.tabBar}
            renderLabel={({route, focused, color}) => (
              <Text style={{color, ...styles.label}}>{route.title}</Text>
            )}
          />
        )}
        lazy //路由懒加载
        swipeEnabled={true} //是否开启标签滑动
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        // initialLayout={{width: layout.width}}
        // style={styles.tabStyle}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // 在此处引入 theme 颜色
  tabBox: {
    // overflow: 'scroll',
  },
  tabBar: {
    flexDirection: 'row',
    overflow: 'scroll',
  },
  label: {
    color: 'red',
  },
});
