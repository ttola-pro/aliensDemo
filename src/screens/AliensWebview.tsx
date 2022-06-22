import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  WebView: {
    marginTop: 0,
  },
});

interface ABWebView {
  visible: boolean;
  onLoadEnd: () => void;
}

export function ABWebView({visible, onLoadEnd}: ABWebView) {
  return (
    <>
      {visible && (
        <WebView
          source={{
            uri: 'https://www.bingoaliens.com',
          }}
          onLoadEnd={onLoadEnd}
          style={styles.WebView}
        />
      )}
    </>
  );
}
