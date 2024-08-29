import { View } from "react-native"
import { styled } from "nativewind"

const StyledView = styled(View)

// i used classes prop because className prop does no effect, i think it conflicts with tailwind
export default function ThemedView({
  children,
  classes,
}: {
  children: React.ReactNode
  classes?: string
}) {
  return (
    <StyledView className={`bg-gray-200 dark:bg-gray-800 ${classes}`}>
      {children}
    </StyledView>
  )
}
