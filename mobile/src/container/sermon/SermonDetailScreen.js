import React from 'react';
import {Layout, Text} from '@ui-kitten/components';

export const SermonDetailScreen = ({navigation, route}) => {
  console.log(
    'Printing navigation in SermonDetailScreen: ',
    navigation.canGoBack(),
  );
  const {video} = route.params;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: video.title,
    });
  }, [navigation, video]);
  return (
    <Layout>
      <Text>Sermon detail screen</Text>
    </Layout>
  );
};
