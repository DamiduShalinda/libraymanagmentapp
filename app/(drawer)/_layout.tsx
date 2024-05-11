import CustomDrawerContent from "@/components/drawer/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";

export default function StackLayout() {
  return (
    <Drawer
      screenOptions={{ 
        headerShown: false,
    }}
      drawerContent={CustomDrawerContent}
    />
  );
}
