/* eslint-disable */
import react from 'react'
import { View } from '@tarojs/components-react'
import { Button, Overlay } from '@antmjs/vantui'

export default function Demo() {
  const [show, setShow] = react.useState(false)
  return (
    <View>
      <Button type="primary" onClick={() => setShow(true)}>
        显示遮罩层
      </Button>
      <Overlay show={show} onClick={() => setShow(false)} />
    </View>
  )
}
