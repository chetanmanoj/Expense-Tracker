import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Home from "./screens/Home";
import Calendar from "./screens/Calendar";

import AddExp from "./components/AddExp";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionic from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    // <View style={styles.container}>
    //   <Home/>
    // </View>
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            let iconName1;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "AddExp") {
              iconName1 = focused ? "pluscircle" : "pluscircleo";
            } else if (route.name === "Calendar") {
              iconName = focused ? "ios-calendar" : "ios-calendar-outline";
            }
            return (
              <View>
                <Ionic name={iconName} size={size} color={color}></Ionic>
                <AntDesign name={iconName1} size={size + 20} color = {color} />
              </View>
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AddExp" component={AddExp} />
        <Tab.Screen name="Calendar" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
