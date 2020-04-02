import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Layout, Card} from '@ui-kitten/components';
import {NanumRegular, NanumExtraBold, NanumBold} from '../MyAppTextComponent';
import {textSubstr} from '../../utils/Helpers';
import {useNavigation} from '@react-navigation/native';

export const VideoItem = ({video}) => {
  const navigation = useNavigation();
  const {title, description, publishedAt, thumbnailUrl} = video;

  return (
    <Card
      status="success"
      style={styles.videoListCard}
      onPress={() => {
        navigation.navigate('설교', {
          screen: '설교영상',
          params: {video: video},
        });
      }}>
      <Layout style={styles.itemContainer}>
        <Image style={styles.thumbnail} source={{uri: thumbnailUrl}} />
        <Layout style={styles.textContainer}>
          <NanumExtraBold
            category="s1"
            style={{marginBottom: 15, fontSize: 16}}>
            {title}
          </NanumExtraBold>
          <NanumRegular category="s2" style={{fontSize: 14}}>
            {textSubstr(description, 0, 20)}....
          </NanumRegular>
          <NanumRegular category="c1" style={{fontSize: 12}}>
            {publishedAt}
          </NanumRegular>
        </Layout>
      </Layout>
    </Card>
  );
};

const styles = StyleSheet.create({
  videoListCard: {
    marginTop: 10,
    borderRadius: 10,
  },
  itemContainer: {
    marginHorizontal: -10,
    marginVertical: -15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    flex: 1,
    height: 125,
    width: 125,
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 15,
  },
});
