import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {MainTabNavigator} from './navigations/MainNavigator.js';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {default as appTheme} from './styles/custom-theme.json';
import {ApolloProvider} from '@apollo/react-hooks';
import {enableScreens} from 'react-native-screens';
import client from './client';

enableScreens();

const theme = {...lightTheme, ...appTheme};

const App = () => {
  return (
    <ApolloProvider client={client}>
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider mapping={mapping} theme={theme}>
          <SafeAreaProvider>
            <MainTabNavigator />
          </SafeAreaProvider>
        </ApplicationProvider>
      </>
    </ApolloProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

export default App;
