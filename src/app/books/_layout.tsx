import {Stack} from "expo-router";

const StackScreen = () => {
    return(
        <Stack>
            <Stack.Screen
                name="[id]"
                options={{
                    headerShown: true,
                    title: "Book Details",
                }}
            />
        </Stack>
    )
}

export default StackScreen