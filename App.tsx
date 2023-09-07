/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';
import {Navigation} from 'react-native-navigation';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import SettingsScreen from './src/modules/settings/Settings';
import HomeScreen from './src/modules/home/Home';

function App(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Button
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Settings',
                  options: {
                    topBar: {
                      title: {
                        text: 'Settings',
                      },
                    },
                  },
                },
              })
            }
            title="Go to Settings"
          />
          <Button
            onPress={() =>
              Navigation.push(props.componentId, {
                component: {
                  name: 'Home',
                  options: {
                    topBar: {
                      title: {
                        text: 'Home screen',
                      },
                    },
                  },
                },
              })
            }
            title="Go to Home"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
export default App;
