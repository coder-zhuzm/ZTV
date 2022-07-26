import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';

interface IProps {
  title: string;
}
const Header = (props: IProps) => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 15,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.text,
    },
    more: {
      color: colors.text,
      // textDecorationLine: 'underline',
    },
  });
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

export default Header;
