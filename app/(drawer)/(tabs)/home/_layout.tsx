import { MaterialIcons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
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
            <DrawerToggleButton />
          ),
        }} />
    </Stack>
  );
};

export default StackLayout;
