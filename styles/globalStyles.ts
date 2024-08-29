import { StyleSheet } from "react-native"
import { useThemeColor } from "@/hooks/useThemeColor"

export const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: useThemeColor(
      { light: "#fff", dark: "#000" },
      "background"
    ),
    color: useThemeColor({ light: "#000", dark: "#fff" }, "text"),
    height: "100%",
    width: "100%",
  },
})

// export const darkStyles = StyleSheet.create({
//   container: {
//     backgroundColor: useThemeColor({ light: "#000", dark: "#fff" }, "background"),
//     color: useThemeColor({ light: "#fff", dark: "#000" }, "text"),
//     height: "100%",
//     width: "100%",
//   },
// })
