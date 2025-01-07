import { pxTransform as TaroPxTransform } from '@tarojs/taro'

export function pxTransform(size: number) {
  return TaroPxTransform(size)
}
export default TaroPxTransform
