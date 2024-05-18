import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Tabs , Stack } from "expo-router";

export default () => {
  return (
    <Tabs initialRouteName="books" screenOptions={{headerTitle : "kmnkn"}}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarShowLabel : false,
          headerShown: false,
          tabBarIcon: ({size , color} : {size : number , color : string}) => (
            <MaterialIcons name="home-filled" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="books"
        options={{
          tabBarShowLabel : false,
          headerShown: false,
          tabBarIcon: ({size , color} : {size : number , color : string}) => (
            <MaterialCommunityIcons name="bookshelf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="authors"
        options={{
          tabBarShowLabel : false,
          tabBarIcon: ({size , color} : {size : number , color : string}) => (
            <FontAwesome name="users" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarShowLabel : false,
          tabBarIcon: ({size , color}  : {size : number , color : string}) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};
