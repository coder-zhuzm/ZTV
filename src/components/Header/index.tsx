import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.searchIcon}>
          <Icon name="search1" size={20} color="#b5b5b5" />
        </View>
        <Text style={styles.inputBox}>请输入关键字</Text>
      </View>
      <View style={styles.historyIcon}>
        <Icon name="clockcircleo" size={20} color="#a7a6a7" />
      </View>
    </View>
  );
};
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
    backgroundColor: '#f3f3f2',
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: '#b5b5b5',
  },
  searchIcon: {
    marginRight: 5,
    fontSize: 20,
  },
  inputBox: {
    color: '#b5b5b5',
  },
  historyIcon: {
    marginLeft: 10,
    width: 20,
  },
});
export default Header;
