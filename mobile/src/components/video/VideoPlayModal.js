import React from 'react';
import {Layout, Text, Button} from '@ui-kitten/components';
import {StyleSheet, Modal} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

export const VideoPlayModal = ({
  selectedVideo,
  modalVisible,
  setModalVisible,
}) => {
  const onBackButtonPressed = () => {
    if (modalVisible) {
      setModalVisible(false);
    }
  };

  return (
    <Layout>
      <Modal
        animationType="fade"
        onShow={() => console.log('modal showed')}
        style={styles.modalContainer}
        visible={modalVisible}
        onRequestClose={onBackButtonPressed}>
        {selectedVideo ? (
          <YoutubeIframe
            height={250}
            videoId={selectedVideo.videoId}
            webViewProps={{allowsFullscreenVideo: true}}
            initialPlayerParams={{
              preventFullScreen: false,
              showClosedcaptions: true,
            }}
          />
        ) : null}
        <Button onPress={() => setModalVisible(false)}>close</Button>
      </Modal>
    </Layout>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
