import * as React from 'react';
import {StatusBar, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import EntIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Home from '@/pages/Home';
import Found from '@/pages/Found';
import My from '@/pages/My';
import Player from '@/pages/Player';
import {isDarkMode} from '../utils';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    // 待修复  dark mode 有问题
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
  );
};

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={{
          dark: isDarkMode(),
          colors: {
            background: isDarkMode() ? 'rgb(1, 1, 1)' : '#FFFFFF',
            border: isDarkMode() ? 'rgb(39, 39, 41)' : 'rgb(216, 216, 216)',
            card: isDarkMode() ? 'rgb(18, 18, 18)' : '#FFFFFF',
            notification: isDarkMode()
              ? 'rgb(255, 69, 58)'
              : 'rgb(255, 69, 58)',
            primary: isDarkMode() ? 'rgb(10, 132, 255)' : 'rgb(10, 132, 255)',
            text: isDarkMode() ? 'rgb(229, 229, 231)' : 'rgb(28, 28, 30)',
          },
        }}>
        <StatusBar
          barStyle={isDarkMode() ? 'light-content' : 'dark-content'}
          backgroundColor={
            Platform.OS === 'ios'
              ? 'default'
              : isDarkMode()
              ? '#000000'
              : '#FFFFFF'
          }
        />
        <Stack.Navigator
          initialRouteName="BottomTabs"
          // screenOptions={() => ({
          //   headerShown: false, //隐藏
          //   cardOverlayEnabled: true,
          //   //使用此道具可在转换期间在卡片下方显示半透明的深色叠加层。默认true在 Android 和falseiOS 上。
          //   gestureEnabled: true,
          //   //是否可以使用手势关闭此屏幕。默认true在 iOS 上，false在 Android 上。
          //   headerBackTitleVisible: false,
          //   //为后退按钮标题是否可见提供了合理的默认值，但如果您想覆盖它，您可以使用true或false在此选项中。
          // })}
        >
          <Stack.Screen
            name="BottomTabs"
            component={BottomTabs}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Player"
            component={Player}
            options={{
              animationTypeForReplace: 'push',
              animation: 'slide_from_right',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 16,
              },
              headerBackTitleVisible: false, //是否展示返回标题 原本是 back
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
