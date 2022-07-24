import {ScrollView, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Carousel} from '@ant-design/react-native';

const HomeTab = () => {
  return (
    <ScrollView>
      <Carousel autoplay infinite style={styles.wrapper}>
        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://upyimg.zhuzm.icu/2022/07/24/f11c1f17fca96.png',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.item}>
          <Image
            source={{
              uri: 'https://upyimg.zhuzm.icu/2022/07/24/b4db1ec5b7336.png',
            }}
            style={styles.image}
          />
        </View>
      </Carousel>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 180,
  },
  item: {
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default HomeTab;
