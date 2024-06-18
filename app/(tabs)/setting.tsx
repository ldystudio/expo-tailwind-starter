import React from "react"

import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TextInput,
  View
} from "react-native"

import { cn } from "@/utils"

const SettingScreen = (props: any) => {
  const { width, height } = Dimensions.get("window")
  const [change, setChange] = React.useState(false)
  const [text, setText] = React.useState("")

  return (
    <ScrollView className='bg-gray-100 p-3'>
      <View className='h-20 w-full items-center justify-center bg-white'>
        <Text
          className={cn(
            "text-2xl font-bold",
            change ? "text-red-500" : "text-blue-500"
          )}
        >
          Setting Page
        </Text>
      </View>

      <Button title='Change Color' onPress={() => setChange(!change)} />

      <TextInput
        className='rounded-md border-2 border-gray-500 p-2'
        placeholder='Enter something'
        onChangeText={setText}
      />
      <Text>{text}</Text>
      <Image source={require("@/assets/images/partial-react-logo.png")} />
    </ScrollView>
  )
}

export default SettingScreen
