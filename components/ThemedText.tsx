import { Text } from "react-native"

// i used classes prop because className prop does no effect, i think it conflicts with tailwind
export default function ThemedText({
  children,
  classes,
}: {
  children: React.ReactNode
  classes?: string
}) {
  return (
    <Text className={` text-gray-800 dark:text-gray-200 ${classes}`}>
      {children}
    </Text>
  )
}
