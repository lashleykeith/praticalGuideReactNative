import { Navigation } from 'react-native-navigation';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';

// Register Screens
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);
Navigation.registerComponent("awesome-places.SharePlaceScreen", () => SharePlaceScreen);
Navigation.registerComponent("awesome-places.FindPlaceScreen", () => FindPlaceScreen);


// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});


// control M
// npm install --save redux react-redux
// react-native run-android
// react native debugger
// https://github.com/jhen0409/react-native-debugger
// reduxDevTools Integration
// https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
// https://github.com/wix/react-native-navigation/blob/v1/docs/installation-ios.md
// https://github.com/oblador/react-native-vector-icons