import {StyleSheet, View} from 'react-native';
import React, {useState, useRef} from 'react';
// import HomeTab from './HomeTab';
// import MovieTab from './MovieTab';
// import TvTab from './TvTab';
import {Tab, Text, TabView} from '@rneui/themed';
import HomeTab from './HomeTab';
import TvTab from './TvTab';
import MovieTab from './MovieTab';

const Tabs = () => {
  // const [routes] = useState([
  //   {title: '推荐', key: 'home'},
  //   {title: '电影', key: 'movie'},
  //   {title: '电视剧', key: 'tv'},
  //   {title: '综艺', key: 'variety'},
  //   {title: '动漫', key: 'carton'},
  //   // {title: '直播', key: 'live'},
  // ]);
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Tab
        value={index}
        containerStyle={styles.containerStyle}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.tabIndicator}
        scrollable={true}
        variant="primary">
        <Tab.Item key="1" title="推荐" titleStyle={styles.titleStyle} />
        <Tab.Item key="2" title="电影" titleStyle={styles.titleStyle} />
        <Tab.Item key="3" title="电视剧" titleStyle={styles.titleStyle} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item>
          <HomeTab />
        </TabView.Item>
        <TabView.Item>
          <View>
            <Text>电影</Text>
          </View>
        </TabView.Item>
        <TabView.Item>
          <View>
            <Text>电视剧</Text>
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: '#fff',
  },
  tabIndicator: {
    backgroundColor: 'blue',
    height: 3,
  },
  titleStyle: {
    color: 'black',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
});
export default Tabs;
