import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IProps {
  title: string;
}
const header = (props: IProps) => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <Text
          style={styles.more}
          onPress={() => {
            console.log(1111);
          }}>
          More
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  more: {
    color: '#b5b5b5',
    // textDecorationLine: 'underline',
  },
});
export default header;
