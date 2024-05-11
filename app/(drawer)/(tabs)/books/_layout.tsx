import { MaterialIcons } from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Stack, useRouter } from "expo-router";
import { Pressable } from "react-native";

const StackLayout = () => {

  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitleAlign: "center",
          headerTitle: "All Books",
          headerRight: () => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
          headerLeft: () => (
            <MaterialIcons name="menu" size={24} color="black" />
          ),
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Book",
          headerLeft: ({color}) => (
            <Pressable onPress={() => router.push("..")}>
            <MaterialIcons name="keyboard-arrow-left" size={24} color={color} />
          </Pressable>
          ),
          headerRight: () => (
            <DrawerToggleButton />
          ),
        }}
      />
    </Stack>
  );
};

export default StackLayout;