import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

interface IProps {
  data: Record<string, string>;
}
const index = (props: IProps) => {
  const {data} = props;
  return (
    <TouchableOpacity key={data.v_id} style={styles.itemWrapper}>
      <Image
        source={{
          uri: data?.v_pic,
        }}
        style={styles.image}
      />
      <Text style={styles.title} numberOfLines={1}>
        {data.v_name}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default index;
