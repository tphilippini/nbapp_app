import React from 'react';
import { StatusBar } from 'expo-status-bar';
// import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { ThemeProvider } from "./utils/theme";

import Home from "./screens/Home";
import Details from "./screens/Details";

// enableScreens();
const Stack = createSharedElementStackNavigator();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' headerMode='none'>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen
            name='Details'
            component={Details}
            // options={() => ({
            // gestureEnabled: false,
            // transitionSpec: {
            //   open: { animation: "timing", config: { duration: 200 }},
            //   close: { animation: "timing", config: { duration: 200 }},
            // },
            // cardStyleInterpolator: ({current: { progress }}) => {
            //   return {
            //     cardStyle: {
            //       opacity: progress,
            //     },
            //   }
            // }
            // })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
