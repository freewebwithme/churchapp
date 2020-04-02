import React from 'react';
import {StyleSheet} from 'react-native';
import {FlatList, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {Layout, Button} from '@ui-kitten/components';
import {VideoItem} from './VideoListItem';
import {MOST_RECENT_VIDEOS} from '../../queries/SearchQuery';

export const VideoFlatList = ({maxResults, order, query}) => {
  const {loading, error, data} = useQuery(MOST_RECENT_VIDEOS, {
    fetchPolicy: 'network-only',
    variables: {
      maxResults: maxResults,
      order: order,
      query: query,
    },
  });

  if (loading) return <Text>Loading....</Text>;
  if (error) return <Text>Error...${error.message}.</Text>;

  const FlatListFooter = () => {
    return (
      <Layout style={styles.flatListFooter}>
        <Button status="success" appearance="outline">
          설교 영상 더 불러오기
        </Button>
      </Layout>
    );
  };

  return (
    <FlatList
      style={styles.videoList}
      data={data.searchVideos.items}
      keyExtractor={item => item.id}
      renderItem={({item, index}) => <VideoItem video={item} />}
      ListFooterComponent={FlatListFooter}
    />
  );
};

const styles = StyleSheet.create({
  videoList: {
    marginTop: 10,
  },
  flatListFooter: {
    flex: 1,
    marginVertical: 20,
    alignItems: 'center',
  },
});
