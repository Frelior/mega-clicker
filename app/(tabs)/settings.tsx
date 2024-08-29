import { Switch, SafeAreaView } from "react-native"
import { useColorScheme } from "nativewind"
import ThemedText from "@/components/ThemedText"
import ThemedView from "@/components/ThemedView"
import ThemedStatusBar from "@/components/ThemedStatusBar"

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  console.log(colorScheme)

  return (
    <ThemedView classes="flex flex-col justify-center items-center h-full">
      <SafeAreaView />
      <ThemedStatusBar />
      <ThemedText classes="text-3xl font-bold">Toggle theme</ThemedText>
      <Switch
        value={colorScheme === "dark"}
        onValueChange={() => toggleColorScheme()}
      />
    </ThemedView>
  )
}
