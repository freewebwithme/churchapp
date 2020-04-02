import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './HomeScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        title: '베리트 개혁 장로 교회',
        headerStyle: {
          backgroundColor: '#6c9552',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'NanumMyeongjo-Bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="처음화면" component={HomeScreen} />
    </Stack.Navigator>
  );
};
