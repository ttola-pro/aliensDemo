/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ABWebView} from './screens/AliensWebview';
import {Hydration} from './screens/Hydration';

const App = () => {
  const [webviewIsVisible, setWebViewIsVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  const handleOnReady = () => {
    setWebViewIsVisible(true);
  };

  const handleWebViewLoadEnd = () => {
    Alert.alert(
      'Notifications',
      'Would you like to receive SMS notifications',
      [
        {text: 'Yes please', onPress: () => console.log('Yes Pressed')},
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.ScrollView}
        style={backgroundStyle}>
        {!webviewIsVisible && (
          <View style={styles.Container}>
            <Hydration onReady={handleOnReady} />
          </View>
        )}
        <ABWebView
          visible={webviewIsVisible}
          onLoadEnd={handleWebViewLoadEnd}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    width: '100%',
    height: '100%',
  },
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
