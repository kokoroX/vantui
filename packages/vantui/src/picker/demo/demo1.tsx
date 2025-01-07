import { useState } from 'react'
import { Picker, PickerProps } from '../../..'

const columns = ['杭州', '宁波', '温州', '嘉兴', '湖州']
export default function Demo() {
  const [value, setValue] = useState<PickerProps['value']>('杭州')
  return (
    <Picker
      value={value}
      onInput={(e) => {
        setValue(e.detail)
      }}
      mode="content"
      columns={columns}
    />
  )
}
