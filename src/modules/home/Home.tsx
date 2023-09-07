// In index.js of a new project
import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk-next';
import {Navigation} from 'react-native-navigation';

const HomeScreen = (props: any) => {
  return (
    <View style={styles.root}>
      <Text>Home Screen</Text>
      <LoginButton
        style={{
          width: '100%',
          paddingVertical: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onLoginFinished={(error, result) => {
          if (error) {
            console.log('login has error: ' + result.error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
            });
          }
        }}
        onLogoutFinished={() => console.log('logout.')}
      />

      <Button
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Settings',
            },
          })
        }
        title="Go to Settings"
      />
    </View>
  );
};
HomeScreen.options = {
  topbar: {
    title: {
      text: 'Home Screen',
    },
  },
  bottomTab: {
    text: 'Home',
  },
};
export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
