import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';

import {HomeStack} from '../container/home/HomeStack';
import {IntroScreen} from '../container/intro/IntroScreen';
import {SermonStack} from '../container/sermon/SermonStack';
import {OfferingScreen} from '../container/offering/OfferingScreen';
import {LiveScreen} from '../container/live/LiveScreen';

import {
  HomeIcon,
  FileTextIcon,
  FilmOutlineIcon,
  RadioOutlineIcon,
  AwardOutlineIcon,
} from '../styles/Icons';

const Tab = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => {
  const onSelect = index => {
    navigation.navigate(state.routeNames[index]);
  };

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={onSelect}
      style={{
        paddingVertical: 10,
      }}
      appearance="noIndicator">
      <BottomNavigationTab
        title="처음화면"
        titleStyle={{fontFamily: 'NanumMyeongjo-ExtraBold'}}
        icon={HomeIcon}
      />
      <BottomNavigationTab
        title="교회소개"
        titleStyle={{fontFamily: 'NanumMyeongjo-ExtraBold'}}
        icon={FileTextIcon}
      />
      <BottomNavigationTab
        title="설교"
        titleStyle={{fontFamily: 'NanumMyeongjo-ExtraBold'}}
        icon={FilmOutlineIcon}
      />
      <BottomNavigationTab
        title="연보"
        titleStyle={{fontFamily: 'NanumMyeongjo-ExtraBold'}}
        icon={AwardOutlineIcon}
      />
      <BottomNavigationTab
        title="생방송"
        titleStyle={{fontFamily: 'NanumMyeongjo-ExtraBold'}}
        icon={RadioOutlineIcon}
      />
    </BottomNavigation>
  );
};

export const MainTabNavigator = () => {
  /* route.state may not exist for first app loading */
  const checkRouteState = route => {
    if (route.state) {
      return route.state.index === 0 ? true : false;
    } else {
      return true;
    }
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="처음화면"
        tabBar={props => <BottomTabBar {...props} />}
        tabBarOptions={{}}>
        <Tab.Screen name="처음화면" component={HomeStack} headerShown="true" />
        <Tab.Screen name="교회소개" component={IntroScreen} />
        <Tab.Screen name="설교" component={SermonStack} />
        <Tab.Screen name="연보" component={OfferingScreen} />
        <Tab.Screen name="생방송" component={LiveScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
