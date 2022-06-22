import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet, View} from 'react-native';

const hydrationTimeoutMs = 3000;
const animationJson = require('../assets/hydration-animation.json');

interface HydrationProps {
  onReady: () => void;
}

const styles = StyleSheet.create({
  lottieContainer: {
    height: 200,
    width: 200,
  },
});

export function Hydration({onReady}: HydrationProps) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onReady();
    }, hydrationTimeoutMs);
    return () => {
      clearTimeout(timeout);
    };
  }, [onReady]);

  return (
    <View style={styles.lottieContainer}>
      <LottieView source={animationJson} autoPlay loop />
    </View>
  );
}
