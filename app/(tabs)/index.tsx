import { Text, View, Button } from "react-native"
import { useState } from "react"

export default function HomeScreen() {
  const [count, setCount] = useState(0)
  function incrementCounter() {
    setCount((prev) => prev + 1)
  }

  return (
    <View className="flex flex-col justify-around items-center h-full text-white">
      <Text className="text-3xl font-bold">Mega clicker</Text>
      <Text className="text-3xl font-bold">{count}</Text>
      <View className="w-[50%] h-20 bg-red-300 border-2 rounded-xl flex justify-center items-center">
        <Button
          title="Click"
          onPress={incrementCounter}
        />
      </View>
    </View>
  )
}
