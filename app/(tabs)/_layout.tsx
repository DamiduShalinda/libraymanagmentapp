import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Tabs , Stack } from "expo-router";

export default () => {
  return (
    <Tabs initialRouteName="authors" screenOptions={{headerTitle : "kmnkn"}}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel : false,
          tabBarIconStyle: {
            width: 24,
            height: 24,
          },
          tabBarIcon: ({focused , color}) => (
            <MaterialIcons name="home-filled" size={24} color="black" />
          ),
          headerTitleAlign: "center",
          headerRight: () => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
          headerLeft: () => (
            <MaterialIcons name="menu" size={24} color="black" />
          ),
          headerPressOpacity: 0.5,
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          tabBarShowLabel : false,
          headerShown: false,
          tabBarIcon: ({focused , color}) => (
            <MaterialCommunityIcons name="bookshelf" size={24} color={focused ? "blue" : "black"} />
          ),
        }}
      />
      <Tabs.Screen
        name="authors"
        options={{
          tabBarShowLabel : false,
          tabBarIcon: ({focused , color}) => (
            <FontAwesome name="users" size={24} color={focused ? "blue" : "black"} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel : false,
          tabBarIcon: ({focused , color}) => (
            <FontAwesome name="user" size={24} color={focused ? "blue" : "black"} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
