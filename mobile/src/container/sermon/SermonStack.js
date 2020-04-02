import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SermonScreen} from './SermonScreen';
import {SermonDetailScreen} from './SermonDetailScreen';

const Stack = createStackNavigator();

export const SermonStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="설교영상"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#6c9552',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'NanumMyeongjo-Bold',
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="설교영상" component={SermonScreen} />
      <Stack.Screen name="설교영상 상세보기" component={SermonDetailScreen} />
    </Stack.Navigator>
  );
};
