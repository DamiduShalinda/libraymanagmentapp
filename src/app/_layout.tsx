import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";

const StackLayout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: true,
            headerSearchBarOptions: {
              placeholder: "Find In Books",
            },
            headerTitle: "All Books",
          }}
        />
        <Stack.Screen
          name="books"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
};

export default StackLayout;
