import { View } from "react-native"
// import { lightStyles } from "@/styles/globalStyles"
import { useThemeColor } from "@/hooks/useThemeColor"

import { StyleSheet } from "react-native"

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const lightStyles = StyleSheet.create({
    container: {
      backgroundColor: useThemeColor(
        { light: "#000", dark: "#000" },
        "background"
      ),
      color: useThemeColor({ light: "#000", dark: "#fff" }, "text"),
      height: "100%",
      width: "100%",
    },
  })

  return (
    <View
      className="h-full w-full"
      style={lightStyles.container}
    >
      {children}
    </View>
  )
}
