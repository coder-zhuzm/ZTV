import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Tabs} from '@ant-design/react-native';
import HomeTab from './HomeTab';
export default () => {
  const tabs = [
    {title: '推荐', params: 'home'},
    {title: '电影', params: 'movie'},
    {title: '电视剧', params: 'tv'},
    {title: '综艺', params: 'variety'},
    {title: '动漫', params: 'carton'},
    {title: '直播', params: 'live'},
  ];
  /**
   * 逻辑
   * 加 onchange事件 获取 当前 tab item
   * 根据当前 item 调用不同组件（home） 或者渲染方法（子组件传参  根据参数 请求数据）
   */
  return (
    <Tabs
      tabs={tabs}
      initialPage={0}
      useOnPan
      animated //开启动画r
      destroyInactiveTab={true}
      tabBarBackgroundColor="transparent" //背景颜色
      tabBarActiveTextColor="blue" //激活颜色
      tabBarInactiveTextColor="black"
      style={styles.container}>
      <View style={styles.container}>
        <HomeTab />
      </View>
      <View>
        <Text style={{color: 'black'}}>推荐1</Text>
      </View>
    </Tabs>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
