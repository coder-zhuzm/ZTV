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
import {StatusBar, useColorScheme} from 'react-native';
import {Platform} from 'react-native';

interface IProps {
  route: any;
  navigation: any;
}

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  // const myTheme = {
  //   isDarkMode ? DarkTheme : DefaultTheme
  // };
  /* 
    colors {
    "background": "rgb(1, 1, 1)",
    "border": "rgb(39, 39, 41)", 
    "card": "rgb(18, 18, 18)",
    "notification": "rgb(255, 69, 58)", 
    "primary": "rgb(10, 132, 255)", 
    "text": "rgb(229, 229, 231)"}
  */

  const Tab = createBottomTabNavigator();

  return (
    // 待修复  dark mode 有问题
    <NavigationContainer
      theme={{
        dark: isDarkMode,
        colors: {
          background: isDarkMode ? 'rgb(1, 1, 1)' : '#FFFFFF',
          border: isDarkMode ? 'rgb(39, 39, 41)' : 'rgb(216, 216, 216)',
          card: isDarkMode ? 'rgb(18, 18, 18)' : '#FFFFFF',
          notification: isDarkMode ? 'rgb(255, 69, 58)' : 'rgb(255, 69, 58)',
          primary: isDarkMode ? 'rgb(10, 132, 255)' : 'rgb(10, 132, 255)',
          text: isDarkMode ? 'rgb(229, 229, 231)' : 'rgb(28, 28, 30)',
        },
      }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          Platform.OS === 'ios' ? 'default' : isDarkMode ? '#000000' : '#FFFFFF'
        }
      />
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
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
