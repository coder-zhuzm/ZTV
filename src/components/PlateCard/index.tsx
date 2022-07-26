import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './header';
import GridCard from './gridCard';

interface IProps {
  type: string;
  hasHeader?: boolean;
}
const index = (props: IProps) => {
  const {type, hasHeader = false} = props;
  const types = [
    {
      key: 'hot',
      title: '热播推荐',
      parmas: 'hot',
    },
    {
      key: 'movie',
      title: '热播电影',
      parmas: 'movie',
    },
    {
      key: 'tv',
      title: '热播电视剧',
      parmas: 'tv',
    },
  ];
  return (
    <View style={styles.container}>
      {hasHeader === true && (
        <Header
          title={
            (type && types.find(item => item.key === type)?.title) || '卡片标题'
          }
        />
      )}

      <GridCard type={type || 'hot'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
export default index;
