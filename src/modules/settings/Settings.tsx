import {Button, StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

const SettingsScreen = props => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
      <Button
        onPress={() =>
          Navigation.push(props.componentId, {
            component: {
              name: 'Home',
            },
          })
        }
        title="Go to Home"
      />
    </View>
  );
};

SettingsScreen.options = {
  bottomTab: {
    text: 'Settings',
  },
  topbar: {
    title: {
      text: 'Settings Screen',
    },
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});

export default SettingsScreen;
