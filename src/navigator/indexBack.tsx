import * as React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const HomeScreen = (props: any) => {
  const {navigation} = props;
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {name: '张三'})}
      />
    </SafeAreaView>
  );
};
interface IProps {
  route: any;
  navigation: any;
}
function DetailsScreen(props: IProps) {
  const {route, navigation} = props;
  const {name, id} = route.params;
  return (
    <SafeAreaView>
      <Text>
        Details Screen hello {name} ---- {id}
      </Text>
      <Button
        title="Go to Details again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={() => ({
            headerShown: false, //隐藏
            cardOverlayEnabled: true,
            //使用此道具可在转换期间在卡片下方显示半透明的深色叠加层。默认true在 Android 和falseiOS 上。
            gestureEnabled: true,
            //是否可以使用手势关闭此屏幕。默认true在 iOS 上，false在 Android 上。
            headerBackTitleVisible: false,
            //为后退按钮标题是否可见提供了合理的默认值，但如果您想覆盖它，您可以使用true或false在此选项中。
          })}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen
            name="Details" // 路由名称
            component={DetailsScreen} //路由对应
            initialParams={{id: 42}} //默认路由参数
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};
