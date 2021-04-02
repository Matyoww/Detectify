import React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Cstm_Header from "../components/Cstm_Header";
import NewsPage from "../components/NewsPage";
import Settings from "../components/Settings";
import VerifyArticle from "../components/VerifyArticle";

const Tabs = createMaterialBottomTabNavigator();
const VerifyStack = createStackNavigator();
const NewsPageStack = createStackNavigator();
const SettingsStack = createStackNavigator();

// -------------------------- NEWS PAGE
const NewsPageStackScreen = () => {
  return (
    <NewsPageStack.Navigator
      headerMode="screen"
      screenOptions={{ header: () => <Cstm_Header /> }}
    >
      <NewsPageStack.Screen name="2.1" component={NewsPage} />
    </NewsPageStack.Navigator>
  );
};

// -------------------------- VERIFY PAGE
const VerifyStackScreen = () => {
  return (
    <VerifyStack.Navigator
      headerMode="screen"
      screenOptions={{ header: () => <Cstm_Header /> }}
    >
      <VerifyStack.Screen name="1.1" component={VerifyArticle} />
    </VerifyStack.Navigator>
  );
};

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{ header: () => <Cstm_Header /> }}
    >
      <SettingsStack.Screen name="3.1" component={Settings} />
    </SettingsStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        shifting={true}
        initialRouteName="2"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let imagepath;
            if (route.name === "2") {
              imagepath = focused
                ? require("../assets/news.png")
                : require("../assets/news-white.png");
            } else if (route.name === "1") {
              imagepath = focused
                ? require("../assets/check.png")
                : require("../assets/check-whole.png");
            } else if (route.name === "3") {
              imagepath = focused
                ? require("../assets/settings-all-white.png")
                : require("../assets/settings-white.png");
            }
            return (
              <Image style={{ width: 22, height: 22 }} source={imagepath} />
            );
          },
        })}
        tabBarOptions={{
          showIcon: true,
          activeTintColor: "#fff",
          inactiveTintColor: "#96A9B2",
          style: styles.pri_color,
        }}
        barStyle={styles.pri_color}
      >
        <Tabs.Screen name="1" component={VerifyStackScreen} />
        <Tabs.Screen name="2" component={NewsPageStackScreen} />
        <Tabs.Screen name="3" component={SettingsStackScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  pri_color: {
    backgroundColor: "#435F71",
  },
});
