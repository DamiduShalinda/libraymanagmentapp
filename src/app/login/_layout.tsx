import { Stack } from "expo-router"

const Stacklayout = () => {
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown : false}}/>
        </Stack>
    )
}

export default Stacklayout;