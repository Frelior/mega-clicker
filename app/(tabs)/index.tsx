import { SafeAreaView, Pressable } from "react-native"
import { useState } from "react"
import ThemedText from "@/components/ThemedText"
import ThemedView from "@/components/ThemedView"
import ThemedStatusBar from "@/components/ThemedStatusBar"

export default function HomeScreen() {
  const [count, setCount] = useState(0)
  function incrementCounter() {
    setCount((prev) => prev + 1)
  }

  return (
    <ThemedView classes="flex flex-col justify-around items-center h-full">
      <SafeAreaView />
      <ThemedStatusBar />
      <ThemedText classes="text-3xl font-bold">Mega clicker</ThemedText>
      <ThemedText classes="text-3xl font-bold">{count}</ThemedText>
      <Pressable
        onPress={incrementCounter}
        className="w-1/2 h-20 bg-red-500 border-2 rounded-xl flex justify-center items-center active:bg-red-600"
      >
        <ThemedText classes="text-2xl font-bold">Click</ThemedText>
      </Pressable>
    </ThemedView>
  )
}
