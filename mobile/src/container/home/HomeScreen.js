import React from 'react';
import {StyleSheet, Image, Dimensions, StatusBar} from 'react-native';
import {Layout} from '@ui-kitten/components';
import SafeAreaView from 'react-native-safe-area-view';

import {VideoFlatList} from '../../components/video/VideoFlatList';

const HeroImage = require('../../assets/images/berit.jpg');
const windowWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#6c9552" />
      <Layout style={styles.imageContainer}>
        <Image style={styles.bannerImage} source={HeroImage} />
      </Layout>
      <Layout style={styles.contentsContainer}>
        <VideoFlatList maxResults={10} order="date" query="" />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  bannerImage: {
    height: 230,
    width: windowWidth,
    resizeMode: 'cover',
  },
  contentsContainer: {
    flex: 2,
    marginHorizontal: 15,
  },
});
