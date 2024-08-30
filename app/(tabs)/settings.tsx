import { Switch } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useColorScheme } from "nativewind"
import ThemedText from "@/components/ThemedText"
import ThemedView from "@/components/ThemedView"
import { setData } from "@/localStorage/storage"
import { useEffect } from "react"

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme()

  useEffect(() => {
    setData("colorScheme", colorScheme)
    console.log(colorScheme, "storage update")
  }, [colorScheme])
  console.log(colorScheme, "component log")

  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ThemedView classes="flex flex-col justify-center items-center h-full">
        <ThemedText classes="text-3xl font-bold">Toggle theme</ThemedText>
        <Switch
          value={colorScheme === "dark"}
          onValueChange={() => toggleColorScheme()}
        />
      </ThemedView>
    </SafeAreaView>
  )
}
