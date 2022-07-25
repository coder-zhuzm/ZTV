import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from '@/pages/Home';
import Found from '@/pages/Found';
import My from '@/pages/My';
import {useColorScheme} from 'react-native';

interface IProps {
  route: any;
  navigation: any;
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const myTheme = {
  //   isDarkMode ? DarkTheme : DefaultTheme
  // };
  const Tab = createBottomTabNavigator();

  return (
    // 待修复  dark mode 有问题
    <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '首页',
            tabBarIcon: ({color, size}) => (
              <EntIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Found"
          component={Found}
          options={{
            tabBarLabel: '发现',
            tabBarIcon: ({color, size}) => (
              <AntIcon name="find" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="My"
          component={My}
          initialParams={{source: 'bottomTabs'}}
          options={{
            tabBarLabel: '我的',
            tabBarIcon: ({color, size}) => (
              <IonIcon name="person" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }} //角标
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
