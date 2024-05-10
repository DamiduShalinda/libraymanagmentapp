import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { View , Text } from "react-native";

export default function BookPage() {

    const glob = useGlobalSearchParams();
    const local = useLocalSearchParams();

    console.log(glob.id, local.id);

  return (
    <View>
        <Text>Book Page</Text>
    </View>
  );
}