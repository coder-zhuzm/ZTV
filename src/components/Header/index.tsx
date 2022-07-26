import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useTheme} from '@react-navigation/native';
import {isDarkMode} from '@/utils/index';

const Header = () => {
  const {colors} = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 10,
      marginVertical: 10,
    },
    left: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      borderRadius: 30,
      backgroundColor: isDarkMode() ? '#292929' : '#f2f4f2',
      paddingVertical: 5,
      paddingHorizontal: 10,
    },
    searchIcon: {
      marginRight: 5,
      fontSize: 20,
    },
    inputBox: {
      color: colors.primary,
    },
    historyIcon: {
      marginLeft: 10,
      width: 20,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.searchIcon}>
          <Icon name="search1" size={20} color={colors.primary} />
        </View>
        <Text style={styles.inputBox}>请输入关键字</Text>
      </View>
      <View style={styles.historyIcon}>
        <Icon name="clockcircleo" size={20} color={colors.primary} />
      </View>
    </View>
  );
};

export default Header;
