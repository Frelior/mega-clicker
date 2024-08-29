import { Switch, Text, View } from "react-native"
import { useAppSelector, useAppDispatch } from "@/hooks/reduxHooks"
import { toggleTheme } from "@/slices/themeSlice"

export default function SettingsScreen() {
  const dispatch = useAppDispatch()

  function toggleAppTheme() {
    dispatch(toggleTheme())
  }

  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode)
  console.log(isDarkMode, "dark mode")

  return (
    <View className="flex flex-col justify-center items-center h-full">
      <Text className="text-3xl">Toggle theme</Text>
      <Switch
        value={isDarkMode}
        onValueChange={() => toggleAppTheme()}
      />
    </View>
  )
}
