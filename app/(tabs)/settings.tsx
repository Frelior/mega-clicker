import { Switch, Text, View } from "react-native"
import { useColorScheme } from "nativewind"
import ThemedText from "@/components/ThemedText"

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  console.log(colorScheme)

  return (
    <View className="flex flex-col justify-center items-center h-full dark:bg-gray-600 transition-colors ease-in-out delay-150">
      <ThemedText themedClassName="text-3xl font-bold">Toggle theme</ThemedText>
      <Switch
        value={colorScheme === "dark"}
        onValueChange={() => toggleColorScheme()}
      />
    </View>
  )
}
