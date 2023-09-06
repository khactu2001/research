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
        <Header />
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

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

const SettingsScreen = () => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};
Navigation.registerComponent('Settings', () => SettingsScreen);
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
export default App;
