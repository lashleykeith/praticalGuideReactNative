import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";
import configureStore from "./src/store/configureStore";

const store = configureStore();

// Register Screens
Navigation.registerComponent(
  "awesome-places.AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "awesome-places.SideDrawer",
  () => SideDrawer
);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
});



// npm install --save redux react-redux
// react-native run-android
// react native debugger
// https://github.com/jhen0409/react-native-debugger
// reduxDevTools Integration
// https://github.com/jhen0409/react-native-debugger/blob/master/docs/redux-devtools-integration.md
// https://github.com/wix/react-native-navigation/blob/v1/docs/installation-ios.md
// https://stackoverflow.com/questions/35215461/error-in-cannot-find-module-babel-core-using-react-js-webpack-and-express-s
// https://wix.github.io/react-native-navigation/#/docs/top-level-api-migration?id=starttabbasedappparams-setrootbottomtabs
// https://github.com/vhpoet/react-native-styling-cheat-sheet
// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript