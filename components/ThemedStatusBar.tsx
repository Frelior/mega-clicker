import { useColorScheme } from "nativewind"
import { StatusBar } from "react-native"

export default function ThemedStatusBar() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  return (
    <StatusBar
      barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
    />
  )
}
