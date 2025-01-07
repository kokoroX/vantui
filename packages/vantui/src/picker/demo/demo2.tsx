import { useState } from 'react'
import { Picker, PickerProps } from '../../..'
import { data } from './data'

export default function Demo() {
  const [value, setValue] = useState<PickerProps['value']>(22)
  return (
    <Picker
      value={value}
      onInput={(e) => {
        console.info(e.detail, '~~~~~~~~~')
        setValue(e.detail)
      }}
      mode="content"
      idKey="id"
      valueKey="text"
      columns={data}
    />
  )
}
