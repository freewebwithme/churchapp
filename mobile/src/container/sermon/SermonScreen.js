import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Button, Text} from '@ui-kitten/components';
import YouTube from 'react-native-youtube';
import {useIsFocused} from '@react-navigation/native';
import {VideoFlatList} from '../../components/video/VideoFlatList';
import {LATEST_VIDEO} from '../../queries/SearchQuery';
import {useQuery} from '@apollo/react-hooks';

/* Display Latest video and list of playlists if exists.
   or just list of videos. */
export const SermonScreen = ({navigation}) => {
  const isFocused = useIsFocused();
  const {loading, error, data} = useQuery(LATEST_VIDEO);

  if (loading) return <Text>Loading.....</Text>;
  if (error) return <Text>Error...${error.message}</Text>;

  const [latestVideo] = data.searchVideos.items.map(item => item);

  return (
    <Layout style={styles.mainContainer}>
      {isFocused && (
        <YouTube
          apiKey="AIzaSyAvxZuv-L6JsA3fkXTPgb7hfF0LxHK1-e8"
          videoId={latestVideo.videoId}
          resumePlayAndroid={false}
          style={{height: 230}}
        />
      )}
      <VideoFlatList
        style={styles.videoListContainer}
        maxResults={25}
        order="date"
        query=""
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  videoListContainer: {
    flex: 2,
  },
});
