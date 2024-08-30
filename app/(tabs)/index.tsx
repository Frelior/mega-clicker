import { Pressable } from "react-native"
import { useEffect, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import ThemedText from "@/components/ThemedText"
import ThemedView from "@/components/ThemedView"
import { setData, getData } from "@/localStorage/storage"
import { useColorScheme } from "nativewind"

export default function HomeScreen() {
  const [count, setCount] = useState(0)
  const { toggleColorScheme } = useColorScheme()

  useEffect(() => {
    const fetchColorScheme = async () => {
      try {
        const storageColorScheme = await getData("colorScheme")
        if (storageColorScheme && storageColorScheme === "dark") {
          toggleColorScheme()
        }
      } catch (error) {
        console.error(error)
      }
    }
    const fetchCounterValue = async () => {
      try {
        const storageCounterValue = await getData("counter")
        if (storageCounterValue) {
          console.log(`current storage value: ${storageCounterValue}`)
          setCount(parseInt(storageCounterValue))
        }
      } catch (error) {
        console.error(error)
      }
    }
    fetchColorScheme()
    fetchCounterValue()
  }, [])

  function incrementCounter() {
    setCount((prev) => {
      const newValue = prev + 1
      setData("counter", newValue.toString())
      console.log(`new value: ${newValue}`)

      return newValue
    })
  }

  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ThemedView classes="flex flex-col justify-around items-center h-full">
        <ThemedText classes="text-3xl font-bold">Mega clicker</ThemedText>
        <ThemedText classes="text-3xl font-bold">{count}</ThemedText>
        <Pressable
          onPress={incrementCounter}
          className="w-1/2 h-20 bg-red-500 border-2 rounded-xl flex justify-center items-center active:bg-red-600"
        >
          <ThemedText classes="text-2xl font-bold">Click</ThemedText>
        </Pressable>
      </ThemedView>
    </SafeAreaView>
  )
}
