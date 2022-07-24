import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Tabs} from '@ant-design/react-native';
import HomeTab from './HomeTab';
export default () => {
  const tabs = [
    {title: '推荐'},
    {title: '电影'},
    {title: '电视剧'},
    {title: '综艺'},
    {title: '动漫'},
    {title: '直播'},
  ];
  return (
    <View style={styles.container}>
      <Tabs
        tabs={tabs}
        initialPage={0}
        useOnPan
        animated //开启动画
        destroyInactiveTab={true}
        tabBarBackgroundColor="transparent" //背景颜色
        tabBarActiveTextColor="blue" //激活颜色
        tabBarInactiveTextColor="black">
        <View>
          <HomeTab />
        </View>
        <View>
          <Text style={{color: 'black'}}>推荐1</Text>
        </View>
      </Tabs>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
