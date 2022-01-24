import ImageWrapper from '@Whil/styles/components/Image'
import ImageProps from '@Whil/types/components/Image'
import { FC } from 'react'

const Image: FC<ImageProps> = ({ src, width, alt, height, style }) => {
  return <ImageWrapper {...{ src, width, alt, height, style }} />
}

export default Image
