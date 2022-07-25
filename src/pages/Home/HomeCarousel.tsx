import {StyleSheet, Image, TouchableOpacity} from 'react-native';

import React from 'react';
import {Carousel} from '@ant-design/react-native';
import {useNavigation} from '@react-navigation/native';
const defaultImg = require('@/assets/images/default.png');
const HomeCarousel = () => {
  const navigation = useNavigation<any>();

  return (
    <Carousel autoplay infinite style={styles.wrapper} autoplayInterval={3000}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('My');
        }}>
        <Image
          source={{
            uri: 'https://upyimg.zhuzm.icu/2022/07/24/f11c1f17fca96.png',
          }}
          defaultSource={defaultImg}
          style={styles.image}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
          navigation.navigate('Found');
        }}>
        <Image
          source={{
            uri: 'https://upyimg.zhuzm.icu/2022/07/24/b4db1ec5b7336.png',
          }}
          style={styles.image}
        />
      </TouchableOpacity>
    </Carousel>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 180,
    overflow: 'hidden',
  },
  item: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default HomeCarousel;
