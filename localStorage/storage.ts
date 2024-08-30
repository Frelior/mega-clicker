import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
  }
}

export async function getData(key: string) {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      return value
    }
  } catch (e) {
    console.error(e)
  }
}

export async function removeData(key: string) {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.error(e)
  }
}
