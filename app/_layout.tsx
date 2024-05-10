import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const StackLayout = () => {

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
        <Stack>
            <Stack.Screen name="login" options={{headerShown : false}}/>
            <Stack.Screen name="register" options={{
                title : "Register"
                }}/>
            <Stack.Screen name="(tabs)" options={{headerShown : false}}/>
        </Stack>
        </QueryClientProvider>
    );
}

export default StackLayout;