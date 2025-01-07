/* eslint-disable */
import { View } from '@tarojs/components-react'
import { Divider } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Divider contentPosition="center">文本</Divider>
      <Divider contentPosition="left">文本</Divider>
      <Divider contentPosition="right">文本</Divider>
    </View>
  )
}
