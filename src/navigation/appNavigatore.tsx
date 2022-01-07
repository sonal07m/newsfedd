import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeScreen";
import NewsFeedList from "../screens/newsfeedList";

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name={"HomeScreen"} component={HomeScreen} />
        <Stack.Screen name={"NewsFeedList"} component={NewsFeedList}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
