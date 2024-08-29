import { Stack } from "expo-router/stack"
import { Provider } from "react-redux"
import { store } from "../store/store"
import AppWrapper from "../components/AppWrapper"
export default function Layout() {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />
        </Stack>
      </AppWrapper>
    </Provider>
  )
}
