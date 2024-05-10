import { MaterialIcons } from "@expo/vector-icons";
import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
      name="index" 
      options={{ 
        title : "Home",
        headerTitleAlign: "center",
          headerRight: () => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
          headerLeft: () => (
            <MaterialIcons name="menu" size={24} color="black" />
          ),
        }} />
    </Stack>
  );
};

export default StackLayout;
