import { Stack } from "expo-router";

const StackLayout = () => {
    return (
        <Stack>
        <Stack.Screen
            name="index"
            options={{
            headerTitleAlign: "center",
            headerTitle: "All Authors",
            }}
        />
        </Stack>
    );
    };

    export default StackLayout;