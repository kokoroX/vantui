import { View } from '@tarojs/components-react'
import { Picker, Button, Form, FormItem } from '../../..'

const columns = [
  {
    text: '杭州',
    id: 1,
    disabled: true,
  },
  {
    text: '宁波',
    id: 2,
  },
  {
    text: '温州',
    id: 3,
  },
]
export default function Demo() {
  const formIt = Form.useForm()

  const submmit = () => {
    formIt.validateFields((_, data) => {
      console.info(data)
    })
  }

  return (
    <View>
      <Form initialValues={{ code: 3 }} form={formIt}>
        <FormItem
          valueFormat={(e) => e.detail}
          trigger="onInput"
          label="地区"
          name="code"
          valueKey="value"
          controllFlexEnd
        >
          <Picker
            idKey="id"
            mode="content"
            showToolbar
            title="请选择"
            columns={columns}
            showArrowRight
          />
        </FormItem>
      </Form>
      <Button type="primary" block onClick={submmit}>
        确定
      </Button>
    </View>
  )
}
