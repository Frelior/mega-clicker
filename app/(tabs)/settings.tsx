import { Switch, Text, View } from "react-native"
import { useColorScheme } from "nativewind"

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  console.log(colorScheme)

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-3xl">Toggle theme</Text>
      <Switch
        value={colorScheme === "dark"}
        onValueChange={toggleColorScheme}
      />
    </View>
  )
}
